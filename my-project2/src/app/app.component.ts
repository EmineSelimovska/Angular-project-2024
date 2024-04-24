import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProperyListItemComponent } from './propery-list-item/propery-list-item.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PromoBannerComponent } from './core/promo-banner/promo-banner.component';
import { FirstHeaderComponent } from './first-header/first-header.component';
import { FormModule, ToastModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultButtonComponent } from './default-button/default-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    FirstHeaderComponent,
    HeaderComponent,
    PropertiesComponent,
    PropertyDetailsComponent,
    ProperyListItemComponent,
    CreateComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    InputContainerComponent,
    InputValidationComponent,
    DefaultButtonComponent,
    HttpClientModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MSELL Real Estate';
}
