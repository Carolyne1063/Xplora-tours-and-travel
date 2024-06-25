import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TourService } from '../../services/tourService/tour-service.service';
import { Tour } from '../../interfaces/tours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  catchPhrase= 'Discover Kenya With Us'

  landingImage='https://i.pinimg.com/474x/b8/09/2d/b8092df655933327b16ed81b8f4625d3.jpg'
  landingImage1='https://i.pinimg.com/474x/93/08/1d/93081d8c0b775bb5c50197ffd2f68973.jpg'
  landingImage2='https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg'
  landingImage3='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/966117e6-2158-4095-8416-b31e9df72aba/ce4319d0-5e00-40da-b1f8-67db09a009f3.png'

  tours: Tour[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit() {
    this.loadTours();
  }

  loadTours() {
    this.tourService.getAllTours().subscribe(
      (data: Tour[]) => {
        this.tours = data;
      },
      (error) => {
        console.error('Error fetching tours', error);
      }
    );
  }
}
