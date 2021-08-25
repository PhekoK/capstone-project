import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: User[] = [];

  constructor( private _userService: UserService ) { }

  ngOnInit(): void {

    //loads users to page
    this._userService.getUser().subscribe(result => {
      this.usersList = result;
    }, (error) => {
      console.log(error);
    })
  }

}
