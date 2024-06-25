import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:3000/api/reviews'; // Base URL for your API

  constructor(private http: HttpClient) {}

  addReview(review: Review): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-review`, review, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateReview(id: string, body: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-review/${id}`, { body }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteReview(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-review/${id}`);
  }

  getReviewsByTourId(tourId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/tour/${tourId}`);
  }
}
