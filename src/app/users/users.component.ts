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

  deleteUser(id:any) {
    this._userService.deleteCurrentUser(id).subscribe(result => {
      console.log("User Deleted successfully!");
      alert("User Deleted from User DB");
      console.log(result);
      this._router.navigate(['/admin-dashboard/users']);
    }, (err) => {
      console.log(err);
    })
  }

}
