import { Component, Input, OnInit } from '@angular/core';
import { ReviewServiceService } from '../../../services/reviewService/review-service.service';
import { Review } from '../../../interfaces/reviews';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-reviews',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './my-reviews.component.html',
  styleUrl: './my-reviews.component.css'
})
export class MyReviewsComponent {
  @Input() tourId!: string;
  reviews: Review[] = [];
  newReview: Review = {
    userId: '', 
    tourId: '', 
    body: '',
    id: '',
    createdAt: new Date(), // Initialize with Date object
    updatedAt: new Date() // Initialize with Date object
  };

  constructor(private reviewService: ReviewServiceService) {}

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviewsByTourId(this.tourId).subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }

  addReview(): void {
    this.newReview.tourId = this.tourId;
    // Assuming userId is set somewhere in your app
    this.newReview.userId = 'some-user-id'; // Replace with actual userId

    this.reviewService.addReview(this.newReview).subscribe(() => {
      this.getReviews();
      this.newReview.body = '';
    });
  }

  deleteReview(id: string): void {
    this.reviewService.deleteReview(id).subscribe(() => {
      this.getReviews();
    });
  }
}
