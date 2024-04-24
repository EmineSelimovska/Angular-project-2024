import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Property } from '../shared/models/Property';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../services/property.service';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-propery-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink,PropertyDetailsComponent],
  templateUrl:'./propery-list-item.component.html',
  styleUrl: './propery-list-item.component.css'
})
export class ProperyListItemComponent implements OnInit{
  properties: Property[] = [];

  constructor(private propertyService: PropertyService){}
   
  ngOnInit(): void {
      this.propertyService.getProperty().subscribe(properties =>{
       this.properties = properties;
        
      })
    }
    
}
