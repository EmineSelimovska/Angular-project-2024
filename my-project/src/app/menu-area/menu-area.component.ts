import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-area',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-area.component.html',
  styleUrl: './menu-area.component.css'
})
export class MenuAreaComponent {

}
