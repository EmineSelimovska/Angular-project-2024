import { Component, OnInit } from '@angular/core';
import { About } from '../shared/models/About';
import { AboutService } from '../services/about.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  abouts: About[] = [];

  constructor(private aboutService : AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(abouts =>{
      this.abouts = abouts;
     })
   }
  }

