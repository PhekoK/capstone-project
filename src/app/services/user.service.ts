import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this._httpClient.post<User>('http://localhost:3000/users', user);
  }

  getUser(): Observable<User[]> {
    return this._httpClient.get<User[]>('http://localhost:3000/users');

  }

  updateCurrentUser(user: User): Observable<User> {
    return this._httpClient.put<User>('http://localhost:3000/users/' + user._id, user)
  }

  getUserById(id: any): Observable<User> {
    return this._httpClient.get<User>('http://localhost:3000/users/' + id)
  }
}
