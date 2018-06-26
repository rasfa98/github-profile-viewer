import { Component, ViewChild } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('searchBtn') searchBtn: any;
  @ViewChild('query') searchInput: any;

  users: string[];
  user: any;
  details: boolean;
  loading: boolean;
  errorMessage: string;

  constructor(private github: GithubService) {
    this.details = false;
  }

  checkInput(query) {
    this.searchBtn.nativeElement.disabled = query.trim() === '';
  }

  search(query) {
    this.loading = true;

    this.github.getUsers(query).subscribe(res => {
      this.loading = false;
      this.users = res.items;
    }, err => this.errorHandler(err));

    this.searchInput.nativeElement.value = '';
    this.searchBtn.nativeElement.disabled = true;
  }

  showDetails(user) {
    this.details = true;
    this.loading = true;

    this.github.getUser(user).subscribe(res => {
      this.loading = false;
      this.user = res;
    }, err => this.errorHandler(err));
  }

  closeDetails(event) {
    this.details = false;
    event.preventDefault();
  }

  errorHandler(err) {
    this.errorMessage = err.message;
    this.loading = false;
    this.details = false;

    setTimeout(() => {
      this.errorMessage = null;
    }, 5000);
  }
}
