import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private Url = 'https://api.github.com';
  private Users = new BehaviorSubject(null);
  private User = new BehaviorSubject(null);

  public users = this.Users.asObservable();
  public user = this.User.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(query) {
    return this.http.get(this.Url + '/search/users?per_page=50&q=' + query);
  }

  getUser(username) {
    return this.http.get(this.Url + '/users/' + username);
  }

  updateUsers(users) {
    this.Users.next(users);
  }

  updateUser(user) {
    this.User.next(user);
  }
}
