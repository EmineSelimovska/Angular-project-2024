import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserId } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../shared/interfaces/UserLogin';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<UserId>(this.getUserLocalStorage())
  public userObservable: Observable<UserId>;
  constructor(private http: HttpClient,  private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }
 
  public get currentUser():UserId{
    return this.userSubject.value;
 }

 login(userLogin: UserLogin):Observable<UserId>{
  const {appUrl} = environment;
  return this.http.post<UserId>(`${appUrl}/users/login`, userLogin).pipe(
    tap({
      next: (user) => {
        this.setUserLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Welcome to Msell Real Estate ${user.name}`,
          'Login Successfull'
        )
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Login Failed')
      }
    })
  )
 }

 
  private setUserLocalStorage(user: UserId){
    localStorage.setItem('token', JSON.stringify(user));
  }

  private getUserLocalStorage():UserId{
    const userJson = localStorage.getItem('token');
    if(userJson){
      return JSON.parse(userJson) as UserId;
    } 
    return new UserId();
  }
}
