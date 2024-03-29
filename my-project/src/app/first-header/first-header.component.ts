import { Component } from '@angular/core';
import { UserId } from '../shared/models/user';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './first-header.component.html',
  styleUrl: './first-header.component.css'
})
export class FirstHeaderComponent {
   user!: UserId;

   constructor(private userService: UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }

   get isAuth(){
       return this.user.token;
   }
}
