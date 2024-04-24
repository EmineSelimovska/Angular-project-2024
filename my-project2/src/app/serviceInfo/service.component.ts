import { Component, OnInit } from '@angular/core';
import { Service } from '../shared/models/Service';
import { ServiceService } from '../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{
    services: Service[] = [];

    constructor(private serviceService: ServiceService){}
    
    ngOnInit(): void {
      this.serviceService.getService().subscribe((services) => {
        this.services = services;
        console.log(services);
        
      })
    }

}
