import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { MenuComponent } from './menu/menu.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    MenuAreaComponent, MenuComponent, PromoBannerComponent,
  FooterComponent, AboutComponent,ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MSELL Real Estate';
}
