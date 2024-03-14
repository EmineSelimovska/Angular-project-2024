
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/img/slider/1.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/img/slider/2.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: '../../assets/img/slider/3.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    this.slides[3] = {
      id: 3,
      src: '../../assets/img/slider/4.jpg',
      title: 'Fourth slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    this.slides[4] = {
      id: 4,
      src: '../../assets/img/slider/5.jpg',
      title: 'Five slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    this.slides[5] = {
      id: 5,
      src: '../../assets/img/slider/6.jpg',
      title: 'Six slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
  
  
}
