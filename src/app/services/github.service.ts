import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  BASE_URL = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(query, page) {
    return this.http.get<any>(this.BASE_URL + '/search/users?page=' + page + '&per_page=50&q=' + query);
  }

  getUser(url) {
    return this.http.get(url);
  }
}
