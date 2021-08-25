import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]
})
export class UpdateUserComponent implements OnInit {

  id: any;

  user: User = new User();

  constructor( private _router: Router,
    private _route: ActivatedRoute , private _userService: UserService ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._userService.getUserById(this.id).subscribe(res => {
      this.user = res;
    }, (err) => { console.log(err); })
  }

  updateUser() {
    this._userService.updateCurrentUser(this.user).subscribe( result=>{
      alert('User Updated Successfully...');
      this._router.navigate(['/admin-dashboard/users']);
    }, (error) => {console.log(error); })

  }

  goBack() {
    this._router.navigate(['/admin-dashboard/users'])
  }

}
