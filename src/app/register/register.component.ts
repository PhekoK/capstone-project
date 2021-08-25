import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor( private _router: Router , private _us: UserService ) { }

  ngOnInit(): void {
  }

  registerNewUser() {
    this._us.registerUser(this.user).subscribe(res => {
      console.log(res);
      console.log('Successfully Added New Applicant');
      alert('All Signed Up! Now Log in');
      this._router.navigate(['/login']);

    }, (error) => { console.log('Some error occured : ' + error); 
  })
  }

}
