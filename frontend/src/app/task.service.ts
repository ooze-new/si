import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { pluck, catchError } from 'rxjs/operators';

export class Task {
  id = '';
  userId = '';
  user = '';
  statusId = '';
  status = '';
  priorityId = '';
  priority = '';
  name = '';
  tags  = [];
}

export interface TasksWithCount {
  count: number;
  tasks: Task[];
}

export interface TaskSort {
  field: string;
  mode: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private _http: HttpClient
  ) {}

  list(
    priorityId: string = '',
    statusId: string = '',
    offset: number = 0,
    limit: number = 0,
    sort: TaskSort = {
      field: '',
      mode: 'asc'
    }
  ): Observable<TasksWithCount>  {
    const params = new HttpParams()
      .set('priority_id', priorityId)
      .set('status_id', statusId)
      .set('offset', offset.toString())
      .set('limit', limit.toString())
      .set('sort_field', sort.field)
      .set('sort_mode', sort.mode)
    ;

    return this._http.get<TasksWithCount>(
      '/api/task', {
        params
      }
    ).pipe(
      pluck('response')
    );
  }

  get(id: string): Observable<Task> {
    const params = new HttpParams()
      // .set('order', 'name')
    ;

    return this._http.get<Task>(
      `/api/task/${id}`
    ).pipe(
      pluck('response')
    );
  }

  create(task: Task): Observable<Task> {
    const params = this.httpParansFromTask(task);

    return this._http.post<Task>(
      `/api/task`,
      '',
      { params }
    ).pipe(
      catchError((response) => {
        // this._errors.flashError(error);
        return throwError(response.error.errors);
      }),
      pluck('response')
    );
  }

  update(task: Task): Observable<Task> {
    const params = this.httpParansFromTask(task);

    return this._http.put<Task>(
      `/api/task/${task.id}`,
      '',
      { params }
    ).pipe(
      catchError((response) => {
        // this._errors.flashError(error);
        return throwError(response.error.errors);
      }),
      pluck('response')
    );
  }

  delete(id: string): Observable<any> {
    return this._http.delete(
      `/api/task/${id}`
    ).pipe(
      pluck('response')
    );
  }

  private httpParansFromTask(task: Task): HttpParams {
    let params = new HttpParams()
      .set('status_id', task.statusId)
      .set('priority_id', task.priorityId)
      .set('name', task.name)
    ;

    task.tags.forEach(
      (tag, index) => {
        params = params.set(`tags[${index}]`, tag);
      }
    );

    return params;
  }
}
