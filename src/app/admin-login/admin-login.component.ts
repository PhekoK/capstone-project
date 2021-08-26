import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [UserService]
})
export class AdminLoginComponent implements OnInit {

  user: User = new User();

  userList: Array<User>  = [];

  constructor(private _router: Router , private _userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    
    this._userService.getUser().subscribe(result => {
      console.log(result);
      this.userList = result;
        if (this.user.email == "admin@gmail.com" && this.user.password == "admin") {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', this.user.email);
          alert('ADMIN Logged In');
          this._router.navigate(['/admin-dashboard']);

        }
    })

  }

}
