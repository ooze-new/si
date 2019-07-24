import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TaskService } from '../task.service';
import { PriorityService, Priority } from '../priority.service';
import { StatusService, Status } from '../status.service';
import { BaseFormComponent } from '../base-form-component';
import { TagService } from '../tag.service';
import { TagCollection } from '../tag-collection';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.styl']
})
export class AddTaskComponent extends BaseFormComponent implements OnInit, OnDestroy {
  priorities: Observable<Priority[]> = of([]);
  statuses: Observable<Status[]> = of([]);
  binded: TagCollection;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _taskService: TaskService,
    private _priorityService: PriorityService,
    private _statusService: StatusService,
    private _tagService: TagService
  ) {
    super();

    this.form = this._formBuilder.group({
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
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  formatter = (x: {name: string}) => x.name;

  submit() {
    if (this.form.valid) {
      this._taskService
        .create(this.form.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((val) => { this._router.navigate(['']); })
      ;
    }
  }

  cancel() {
    this._router.navigate(['']);
  }
}
