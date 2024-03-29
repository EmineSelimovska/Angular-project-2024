import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Property } from '../shared/models/Property';
import { PropertyService } from '../services/property.service';
import { CommonModule } from '@angular/common';
import { EditComponent } from '../edit/edit.component';
import { MenuAreaComponent } from '../core/menu-area/menu-area.component';
import { FooterComponent } from '../core/footer/footer.component';
import { MenuComponent } from '../core/menu/menu.component';
import { HeaderComponent } from '../core/header/header.component';
import { FirstHeaderComponent } from '../first-header/first-header.component';


@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FirstHeaderComponent,MenuAreaComponent, FooterComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  properties!: Property;

  constructor(activeRoute: ActivatedRoute, propertyServices:PropertyService){
      activeRoute.params.subscribe((params) => {
        if(params['id']){
          propertyServices.getById(activeRoute.snapshot.params['id']).subscribe((serverProperty:any) => {
            this.properties = serverProperty;
            this.properties = JSON.parse(serverProperty)
            
          })
        }
      })
    }


    ngOnInit(): void {
      
    }
    
}
