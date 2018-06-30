import { Component, OnInit } from '@angular/core';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  showError = false;

  constructor(private misc: MiscService) { }

  ngOnInit() {
    this.misc.error.subscribe(error => {
      if (error) {
        this.showError = true;

        setTimeout(() => {
          this.showError = false;
        }, 5000);
      }
    });
  }

}
