import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../services/userService/user-service.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected from styleUrl to styleUrls
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserServiceService) { // Inject the UserService
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get firstName() { return this.registerForm.get('firstname')!; }
  get lastName() { return this.registerForm.get('lastname')!; }
  get email() { return this.registerForm.get('email')!; }
  get password() { return this.registerForm.get('password')!; }

  
  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value)
        .subscribe({
          next: response => {
            console.log('Registration successful:', response);
            // Optionally navigate to another page or show a success message
          },
          error: error => {
            console.error('Registration error:', error);
            // Handle error: Display an error message or log the error
          }
        });
    }
  } 
}