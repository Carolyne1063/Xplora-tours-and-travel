import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourService } from '../../../services/tourService/tour-service.service';
import { Tour } from '../../../interfaces/tours';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-managetours',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './managetours.component.html',
  styleUrls: ['./managetours.component.css'],
})
export class ManageToursComponent implements OnInit {
  tours: Tour[] = [];
  tourForm: FormGroup;
  editMode: boolean = false;
  editTourId: string | null = null;

  constructor(private tourService: TourService, private fb: FormBuilder) {
    this.tourForm = this.fb.group({
      type: ['', Validators.required],
      destination: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
      createdAt: [new Date().toISOString(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchAllTours();
  }

  fetchAllTours() {
    this.tourService.getAllTours().subscribe(
      (tours: Tour[]) => {
        this.tours = tours;
      },
      (error) => {
        console.error('Error fetching tours:', error);
      }
    );
  }

  createTour() {
    if (this.tourForm.valid) {
      const newTour: Tour = this.tourForm.value;
      console.log('Creating tour with data:', newTour); // Debugging log
      this.tourService.createTour(newTour).subscribe(
        () => {
          console.log('Tour created successfully'); // Debugging log
          this.fetchAllTours();
          this.tourForm.reset();
        },
        (error) => {
          console.error('Error creating tour:', error);
        }
      );
    } else {
      console.log('Form is invalid'); // Debugging log
    }
  }
  
  
  

  updateTour() {
    if (this.tourForm.valid && this.editTourId) {
      const updatedTour: Partial<Tour> = this.tourForm.value;
      this.tourService.updateTour(this.editTourId, updatedTour).subscribe(
        () => {
          this.fetchAllTours();
          this.tourForm.reset();
          this.editMode = false;
          this.editTourId = null;
        },
        (error) => {
          console.error('Error updating tour:', error);
        }
      );
    }
  }

  deleteTour(id: string) {
    this.tourService.deleteTour(id).subscribe(
      () => {
        this.fetchAllTours();
      },
      (error) => {
        console.error('Error deleting tour:', error);
      }
    );
  }

  setEditMode(tour: Tour) {
    this.editMode = true;
    this.editTourId = tour.id!;
    this.tourForm.setValue({
      type: tour.type,
      destination: tour.destination,
      duration: tour.duration,
      price: tour.price,
      createdAt: tour.createdAt
    });
  }
}