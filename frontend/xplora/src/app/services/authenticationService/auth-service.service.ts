// src/app/services/authenticationService/auth-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private API_URL = 'http://localhost:3000/api/users';
  private loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap((response: any) => {
          // Assuming backend returns a token or user object on successful login
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response)); // Store token/user info in local storage
            this.loggedIn = true; // Set loggedIn to true upon successful login
          }
        })
      );
  }

  logout() {
    // Clear user data from storage upon logout
    localStorage.removeItem('currentUser');
    this.loggedIn = false; // Set loggedIn to false upon logout
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }
}
