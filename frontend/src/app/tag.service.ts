import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export class Tag {
  id = '';
  name = '';
}

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private _http: HttpClient) { }

  lookup(text: string): Observable<Tag[]> {
    const params = new HttpParams()
      .set('name', text)
    ;

    return this._http.get<Tag[]>(
      '/api/lookup', { params }
    ).pipe(
      pluck('response')
    );
  }
}
