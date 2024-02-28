import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    // {path: 'properties', component: PropertiesComponent},
    // {path: 'contact', component: ContactComponent}
];

