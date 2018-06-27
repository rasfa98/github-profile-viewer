import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor(private github: GithubService) { }

  ngOnInit() {
  }

  search(query) {
    this.github.updateLoading(true);

    this.github.updateUsers([]);

    this.github.getUsers(query).subscribe(res => {
      this.github.updateUsers(res.items);
    }, err => this.github.updateError(err));
  }

}
