import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../../interfaces/tours';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl = 'http://localhost:3000/api/tours'; // Base URL for your API

  constructor(private http: HttpClient) {}

  // Method to create a new tour
  createTour(tour: Tour): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-tour`, tour, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Method to update a tour by its ID
  updateTour(id: string, tour: Partial<Tour>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tour, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Method to delete a tour by its ID
  deleteTour(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Method to fetch all tours
  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.apiUrl}/tours`);
  }

  // Method to fetch a tour by its ID
  getTourById(id: string): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }
}
