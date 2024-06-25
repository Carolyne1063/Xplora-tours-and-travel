import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../../services/tourService/tour-service.service';
import { Tour } from '../../../interfaces/tours';

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
  tours: Tour[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.fetchAllTours();
  }

  fetchAllTours(): void {
    this.tourService.getAllTours().subscribe(
      (tours) => {
        this.tours = tours;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }
}
