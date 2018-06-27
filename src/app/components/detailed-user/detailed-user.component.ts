import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.css']
})
export class DetailedUserComponent implements OnInit {
  private user;
  private details = false;

  constructor(private github: GithubService) {}

  ngOnInit() {
    this.github.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.details = true;
      }
    });

    this.github.error.subscribe(erros => this.details = false);
  }

  closeDetails(event) {
    this.details = false;
  }

}
