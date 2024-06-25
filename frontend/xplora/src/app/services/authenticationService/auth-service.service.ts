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
  private isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.loggedIn = true;

            // Hardcoding admin credentials here
            if (credentials.email === 'admin@example.com' && credentials.password === 'adminpassword') {
              this.isAdmin = true;
            } else {
              this.isAdmin = false;
            }
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
    this.isAdmin = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }

  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
