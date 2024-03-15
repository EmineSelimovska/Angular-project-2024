import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Property } from '../shared/models/Property';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propery-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './propery-list-item.component.html',
  styleUrl: './propery-list-item.component.css'
})
export class ProperyListItemComponent implements OnInit{
    @Input()
    property!:Property;


    ngOnInit(): void {
      
    }
    
}
