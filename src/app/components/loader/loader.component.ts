import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  private _loading = false;

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.github.loading.subscribe(loading => this._loading = loading);
    this.github.error.subscribe(error => this._loading = false);
  }

}
