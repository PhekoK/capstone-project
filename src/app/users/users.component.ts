import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  usersList: User[] = [];

  user: User = new User();

  id: any;

  constructor( private _userService: UserService,
      private _router: Router ) { }

  ngOnInit(): void {

    //loads users to page
    this._userService.getUser().subscribe(result => {
      this.usersList = result;
    }, (error) => {
      console.log(error);
    })
  }

  deleteUser() {
    this._userService.deleteCurrentUser(this.user._id)
    .subscribe(result => {
      alert('User Deleted Successfully..!!');
      this._router.navigate(['/admin-dashboard/users']);
    }, (error) => { console.log(error); })
  }

}
