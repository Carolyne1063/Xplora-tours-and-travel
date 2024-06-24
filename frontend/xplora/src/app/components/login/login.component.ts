// src/app/components/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import FormBuilder, FormGroup, Validators
import { AuthServiceService } from '../../services/authenticationService/auth-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Define loginForm as FormGroup
  errorMessage: string = ''; // Initialize errorMessage as empty string

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder
    private authService: AuthServiceService,
    private router: Router  // Inject AuthServiceService
  ) {
    this.loginForm = this.formBuilder.group({ // Initialize lop0: booleanp0: booleanp0: booleanginForm using formBuilder
      email: ['', [Validators.required, Validators.email]], // Define email FormControl with validators
      password: ['', [Validators.required, Validators.minLength(6)]] // Define password FormControl with validators
    });
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email'); } // Getter for accessing email FormControl
  get password() { return this.loginForm.get('password'); } // Getter for accessing password FormControl

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe(
        () => {
          console.log('Login successful');
          this.router.navigate(['/user-dashboard']); // Redirect to user dashboard upon successful login
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}