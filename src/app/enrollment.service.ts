import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'https://umang-note-app.herokuapp.com/notes';
  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    return this._http.post<any>(this._url, user);
  }
  enrollGet() {
    return this._http.get<any>(this._url);
  }
  enrollDelete(noteId) {
    return this._http.delete<any>(this._url+'/'+noteId);
  }
  enrollPut(noteId, user: User) {
    return this._http.put<any>(this._url+'/'+noteId, user);
  }

  enrollGetById(noteId) {
    return this._http.get<any>(this._url+'/'+noteId);
  }
}
