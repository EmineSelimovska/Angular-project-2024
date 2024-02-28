import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuAreaComponent } from '../menu-area/menu-area.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [RouterLink,MenuAreaComponent,MenuComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

  // constructor(private activeRouter: ActivatedRoute){

  // }
}
