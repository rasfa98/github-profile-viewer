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
  details: boolean;
  user: any;

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
    this.github.getUsers(query).subscribe(res => this.users = res.items);
    this.searchInput.nativeElement.value = '';
    this.searchBtn.nativeElement.disabled = true;
  }

  showDetails(user) {
    this.github.getUser(user).subscribe(res => {
      this.details = true;
      this.user = res;
    });
  }

  closeDetails() {
    this.details = false;
  }
}
