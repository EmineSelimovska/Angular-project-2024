import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuAreaComponent } from '../menu-area/menu-area.component';
import { AboutComponent } from '../../about/about.component';
import { ServiceComponent } from '../../serviceInfo/service.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { FirstHeaderComponent } from '../../first-header/first-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,FirstHeaderComponent,MenuAreaComponent,MenuComponent,AboutComponent,
  ServiceComponent,PromoBannerComponent,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
