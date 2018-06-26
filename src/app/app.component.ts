import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[];
  details: boolean;
  user: any;

  constructor(private github: GithubService) {
    this.details = false;
  }

  search(query) {
    this.github.getUsers(query).subscribe(res => this.users = res.items);
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
