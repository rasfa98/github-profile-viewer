import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private _url = 'https://api.github.com';
  private _users = new BehaviorSubject(null);
  private _user = new BehaviorSubject(null);
  private _error = new BehaviorSubject(null);
  private _loading = new BehaviorSubject(null);

  public users = this._users.asObservable();
  public user = this._user.asObservable();
  public error = this._error.asObservable();
  public loading = this._loading.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(query) {
    return this.http.get(this._url + '/search/users?q=' + query);
  }

  getUser(username) {
    return this.http.get(this._url + '/users/' + username);
  }

  updateUsers(users) {
    this._users.next(users);
  }

  updateUser(user) {
    this._user.next(user);
  }

  updateError(error) {
    this._error.next(error);
  }

  updateLoading(loading) {
    this._loading.next(loading);
  }
}
