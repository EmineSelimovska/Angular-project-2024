import { Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AuthGuardService } from './services/auth-guard.service';
export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'properties', component: PropertiesComponent,pathMatch: 'full'},
    {path: 'properties/:id', component: PropertyDetailsComponent},
    {path: '', component: HeaderComponent },
    {path: 'create', component: CreateComponent,
   canActivate: [AuthGuardService]},
   //  {path: 'edit', component: EditComponent, canActivate: [AuthGuardService]},
    {path: 'contact', component: ContactComponent},
     {path: 'login', component: LoginComponent},
     {path: 'register', component: RegisterComponent}
    
];



