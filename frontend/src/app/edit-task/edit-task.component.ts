import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

import { TaskService, Task } from '../task.service';
import { PriorityService, Priority } from '../priority.service';
import { StatusService, Status } from '../status.service';
import { takeUntil } from 'rxjs/operators';
import { BaseFormComponent } from '../base-form-component';
import { TagService } from '../tag.service';
import { TagCollection } from '../tag-collection';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.styl']
})
export class EditTaskComponent extends BaseFormComponent implements OnInit, OnDestroy {
  priorities: Observable<Priority[]> = of([]);
  statuses: Observable<Status[]> = of([]);
  binded: TagCollection;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _formBuilder: FormBuilder,
    private _taskService: TaskService,
    private _priorityService: PriorityService,
    private _statusService: StatusService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _tagService: TagService
  ) {
    super();

    this.form = this._formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      priorityId: ['', [Validators.required]],
      statusId: ['', [Validators.required]],
      tags: this._formBuilder.array([])
    });

    this.binded = new TagCollection(
      this.form.get('tags') as FormArray,
      this._formBuilder,
      this._tagService
    );
  }

  ngOnInit() {
    this.priorities = this._priorityService.list();
    this.statuses = this._statusService.list();

    this._taskService.get(this._route.snapshot.params['id'])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (task) => {
          const tags = task.tags;
          task.tags = [];
          this.form.patchValue(task);

          tags.forEach((tag) => this.binded.add(tag));
        }
      );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  formatter = (x: {name: string}) => x.name;

  submit() {
    if (this.form.valid) {
      this._taskService.update(this.form.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((val) => { this._router.navigate(['']); })
      ;
    }
  }

  cancel() {
    this._router.navigate(['']);
  }
}
