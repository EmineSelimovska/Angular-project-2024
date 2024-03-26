import { Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'properties', component: PropertiesComponent},
    {path: '', component: HeaderComponent },
    {path: 'create', component: CreateComponent},
    {path: 'contact', component: ContactComponent},
     {path: 'login', component: LoginComponent},
     {path: 'register', component: RegisterComponent}
    
];

