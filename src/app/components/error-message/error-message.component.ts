import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  private errorMessage = null;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.error.subscribe(error => {
      if (error) {
        this.errorHandler(error);
      }
    });
  }

  errorHandler(err) {
    this.errorMessage = err.message;

    setTimeout(() => {
      this.errorMessage = null;
    }, 5000);
  }
}
