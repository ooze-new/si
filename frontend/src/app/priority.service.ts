import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export class Priority {
  id = '';
  name = '';
}

@Injectable({
  providedIn: 'root'
})
export class PriorityService {
  constructor(
    private _http: HttpClient
  ) {}

  list(): Observable<Priority[]> {
    return this._http.get<Priority[]>(
      '/api/priorities'
    ).pipe(
      pluck('response')
    );
  }
}
