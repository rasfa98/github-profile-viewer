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
  @ViewChild('next') nextBtn: any;
  @ViewChild('prev') prevBtn: any;

  users: string[];
  user: any;
  details: boolean;
  loading: boolean;
  errorMessage: string;
  page: number;
  lastPage: number;
  query: string;

  constructor(private github: GithubService) {
    this.details = false;
    this.page = 1;
  }

  checkInput(query) {
    this.searchBtn.nativeElement.disabled = query.trim() === '';
    this.page = 1;
  }

  search(query) {
    this.loading = true;
    this.query = query;
    this.users = [];

    this.github.getUsers(query, this.page).subscribe(res => {
      this.lastPage = Math.ceil(res.total_count / 50);
      this.loading = false;
      this.users = res.items;

      this.prevBtn.nativeElement.disabled = this.page < 2 ;

      if (this.page === this.lastPage || res.total_count < 1) {
        this.nextBtn.nativeElement.disabled = true;
      } else {
        this.nextBtn.nativeElement.disabled = false;
      }

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

  nextPage() {
    if (this.page !== this.lastPage) {
      this.page += 1;
      this.search(this.query);
    }
  }

  prevPage() {
    if (this.page !== 1) {
      this.page -= 1;
      this.search(this.query);
    }
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
