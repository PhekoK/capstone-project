import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  constructor( private _US: UserService , 
         private _router: Router ) { }

  ngOnInit(): void {
  }

  addUser() {
    this._US.registerUser(this.user)
    .subscribe(result => {
      console.log('New User Added SUccessfully')
      this._router.navigate(['/admin-dashboard/users']);
    } , (error) => {
      console.log(error);
    })
  }

}
