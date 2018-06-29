import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @ViewChild('query') inputField: any;
  @ViewChild('searchBtn') searchBtn: any;

  constructor(private github: GithubService) { }

  ngOnInit() { }

  checkInput(input) {
    if (input.trim() === '') {
      this.searchBtn.nativeElement.disabled = true;
    } else {
      this.searchBtn.nativeElement.disabled = false;
    }
  }

  search(query) {
    this.github.getUsers(query).subscribe(res => {
      this.github.updateUsers(res.items);
      this.inputField.nativeElement.value = '';
      this.searchBtn.nativeElement.disabled = true;
    });
  }

}
