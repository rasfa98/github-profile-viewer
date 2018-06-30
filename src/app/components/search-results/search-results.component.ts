import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private users;

  constructor(private github: GithubService, private misc: MiscService) { }

  ngOnInit() {
    this.github.users.subscribe(users => this.users = users);
  }

  showDetails(username) {
    this.github.getUser(username).subscribe(res => {
      this.github.updateUser(res);
    }, error => this.misc.updateError(true));
  }
}
