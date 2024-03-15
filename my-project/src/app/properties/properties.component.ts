import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuAreaComponent } from '../core/menu-area/menu-area.component';
import { MenuComponent } from '../core/menu/menu.component';
import { FooterComponent } from '../core/footer/footer.component';
import { Property } from '../shared/models/Property';
import { PropertyService } from '../services/property.service';
import { Observable } from 'rxjs';
import { ProperyListItemComponent } from '../propery-list-item/propery-list-item.component';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [RouterLink,MenuAreaComponent,ProperyListItemComponent,FooterComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit{
  
  properties: Property[] = [];
  constructor(private properyService: PropertyService, activeRouter: ActivatedRoute){
    let propertyObservable: Observable<Property[]>;

    propertyObservable = properyService.getAll();

    propertyObservable.subscribe((serverProperty) => {
      this.properties = serverProperty
    })
  }

  ngOnInit():void{

  }
}
