import { Component, OnInit } from '@angular/core';
import {ViewUsersService} from './view-users.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  constructor(private abc: ViewUsersService) { }
  users;
  ngOnInit() {
    this.abc.getAllUsers().subscribe( data => {
      this.users = data;
    });
  }

}
