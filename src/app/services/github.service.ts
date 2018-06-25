import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  BASE_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(query) {
    return this.http.get(this.BASE_URL + '/search/users?per_page=100&q=' + query);
  }

  getUser(username) {
    return this.http.get(this.BASE_URL + '/users/' + username);
  }
}
