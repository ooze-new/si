import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export class Status {
  id = '';
  name = '';
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(
    private _http: HttpClient
  ) {}

  list(): Observable<Status[]> {
    return this._http.get<Status[]>(
      '/api/statuses'
    ).pipe(
      pluck('response')
    );
  }
}
