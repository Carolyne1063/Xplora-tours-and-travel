// src/app/services/booking.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../../interfaces/bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }

  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/bookings/${id}`);
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/bookings`);
  }

  updateBooking(id: string, booking: Partial<Booking>): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/bookings/${id}`, booking);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/bookings/${id}`);
  }
}
