import { Component, OnInit } from '@angular/core';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  public showSpinner = true;

  constructor(private misc: MiscService) { }

  ngOnInit() {
    this.misc.loading.subscribe(loading => this.showSpinner = loading);
    this.misc.error.subscribe(error => this.showSpinner = false);
  }
}
