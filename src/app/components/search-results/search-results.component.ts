import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private users;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.users.subscribe(users => {
      this.users = users;
      this.github.updateLoading(false);
    });
  }

  showDetails(username) {
    this.github.getUser(username).subscribe(res => {
      this.github.updateUser(res);
    }, err => this.github.updateError(err));
  }

}
