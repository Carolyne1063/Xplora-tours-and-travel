// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User, LoginDetails } from '../../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API_URL = 'http://localhost:3000/api/users';  // Set the base URL here

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  registerUser(user: Partial<User>): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user, this.getHttpOptions())
      .pipe(
        tap((response: any) => {
          console.log('User registered successfully!', response);
          // Optionally, you can perform any side effects here
        }),
        catchError(this.handleError)
      );
  }

  loginUser(loginDetails: LoginDetails): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, loginDetails, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  updateUser(userId: string, user: Partial<User>): Observable<any> {
    return this.http.put(`${this.API_URL}/${userId}`, user, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${userId}`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${userId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError('Something bad happened; please try again later.');
  }
}