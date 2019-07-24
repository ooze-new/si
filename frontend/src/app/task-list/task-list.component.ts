import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, BehaviorSubject, combineLatest, concat } from 'rxjs';
import { map, share, switchAll, debounceTime, pluck, tap } from 'rxjs/operators';

import { TaskService, Task, TaskSort } from '../task.service';
import { AuthService } from '../auth.service';
import { PriorityService, Priority } from '../priority.service';
import { StatusService, Status } from '../status.service';

interface SortListItem {
  name: string;
  value: TaskSort;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.styl']
})
export class TaskListComponent implements OnInit {
  private refresh = new BehaviorSubject<boolean>(true);

  form: FormGroup;
  priorities: Observable<Priority[]> = of([]);
  statuses: Observable<Status[]> = of([]);
  tasks: Observable<Task[]> = of([]);
  taskCount = 0;
  itemPerPage = 10;
  page = new BehaviorSubject<number>(1);
  sortModes: SortListItem[] = [
    {
      name: 'Приоритет по возрастанию',
      value: {
        field: 'priority',
        mode: 'asc'
      }
    },
    {
      name: 'Приоритет по убыванию',
      value: {
        field: 'priority',
        mode: 'desc'
      }
    },
    {
      name: 'Статс по возрастанию',
      value: {
        field: 'status',
        mode: 'asc'
      }
    },
    {
      name: 'Статс по убыванию',
      value: {
        field: 'status',
        mode: 'desc'
      }
    },
    {
      name: 'Название по возрастанию',
      value: {
        field: 'name',
        mode: 'asc'
      }
    },
    {
      name: 'Название по убыванию',
      value: {
        field: 'name',
        mode: 'desc'
      }
    },
  ];

  get authStateChange$(): BehaviorSubject<boolean> {
    return this._auth.authStateChange$;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _auth: AuthService,
    private _taskService: TaskService,
    private _priorityService: PriorityService,
    private _statusService: StatusService
  ) {
    this.form = this._formBuilder.group({
      priority: [''],
      status: [''],
      sort: [{
        field: 'priority',
        mode: 'asc'
      }]
    });
  }

  ngOnInit() {
    this.priorities = this._priorityService.list();
    this.statuses = this._statusService.list();

    this.tasks = combineLatest(
      this._auth.authStateChange$,
      concat(
        of(this.form.value),
        this.form.valueChanges.pipe(
          debounceTime(1000)
        )
      ),
      this.page,
      this.refresh
    ).pipe(
      map(([authState, filter, page]) =>
        authState
          ? this._taskService
            .list(
              filter.priority,
              filter.status,
              (page - 1) * this.itemPerPage,
              this.itemPerPage,
              filter.sort
            ).pipe(
              tap(tasks => this.taskCount = tasks.count),
              pluck('tasks'),
            )
          : of([])
      ),
      share(),
      switchAll()
    );
  }

  pageChange(page: number) {
    this.page.next(page);
  }

  delete(task: Task) {
    if (confirm('Удалить задачу?')) {
      this._taskService
        .delete(task.id)
        .subscribe((val) => this.refresh.next(true))
      ;
    }
  }
}
