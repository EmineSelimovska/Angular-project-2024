import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuAreaComponent } from '../menu-area/menu-area.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuAreaComponent,MenuComponent,AboutComponent,
  ServiceComponent,PromoBannerComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
