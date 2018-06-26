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
  loadingResults: boolean;
  loadingDetails: boolean;

  constructor(private github: GithubService) {
    this.details = false;
  }

  checkInput(query) {
    if (query.trim() !== '') {
      this.searchBtn.nativeElement.disabled = false;
    } else {
      this.searchBtn.nativeElement.disabled = true;
    }
  }

  search(query) {
    this.loadingResults = true;
    this.github.getUsers(query).subscribe(res => {
      this.loadingResults = false;
      this.users = res.items;
    });
    this.searchInput.nativeElement.value = '';
    this.searchBtn.nativeElement.disabled = true;
  }

  showDetails(user) {
    this.details = true;
    this.loadingDetails = true;
    this.github.getUser(user).subscribe(res => {
      this.loadingDetails = false;
      this.user = res;
    });
  }

  closeDetails(event) {
    this.details = false;
    event.preventDefault();
  }
}
