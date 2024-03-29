import { Component } from '@angular/core';
import { MenuAreaComponent } from '../core/menu-area/menu-area.component';
import { MenuComponent } from '../core/menu/menu.component';
import { FooterComponent } from '../core/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FirstHeaderComponent } from '../first-header/first-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,FirstHeaderComponent,MenuAreaComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
