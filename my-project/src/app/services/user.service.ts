import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserId } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<UserId>(this.getUserLocalStorage())
  public userObservable: Observable<UserId>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }
 
 
  public get currentUser():UserId{
    return this.userSubject.value;
 }


  private getUserLocalStorage():UserId{
    const userJson = localStorage.getItem('token');
    if(userJson){
      return JSON.parse(userJson) as UserId;
    } 
    return new UserId();
  }
}
