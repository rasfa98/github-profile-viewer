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

  public users = this._users.asObservable();
  public user = this._user.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(query) {
    return this.http.get(this._url + '/search/users?per_page=50&q=' + query);
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
}
