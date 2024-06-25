import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../../services/tourService/tour-service.service'; // Adjust the import path according to your project structure
import { Tour } from '../../../interfaces/tours';// Adjust the import path according to your project structure

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
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
