import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuAreaComponent } from '../core/menu-area/menu-area.component';
import { MenuComponent } from '../core/menu/menu.component';
import { FooterComponent } from '../core/footer/footer.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [RouterLink,MenuAreaComponent,FooterComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

  // constructor(private activeRouter: ActivatedRoute){

  // }
}
