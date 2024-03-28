import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Property } from '../shared/models/Property';
import { PropertyService } from '../services/property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  property: Property[] = [];

  constructor(activeRoute: ActivatedRoute, propertyServices:PropertyService){
      activeRoute.params.subscribe((params) => {
        if(params['id']){
          propertyServices.getById(params['id']).subscribe((serverProperty) => {
            this.property = serverProperty;
          })
        }
      })
    }


    ngOnInit(): void {
      
    }
    
}
