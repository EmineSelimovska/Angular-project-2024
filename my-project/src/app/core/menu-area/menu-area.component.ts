import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserId } from '../../shared/models/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu-area',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './menu-area.component.html',
  styleUrl: './menu-area.component.css',
})
export class MenuAreaComponent {
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
