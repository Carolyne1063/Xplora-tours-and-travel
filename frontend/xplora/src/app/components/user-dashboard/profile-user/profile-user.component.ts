import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../../../services/authenticationService/auth-service.service';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { User } from '../../../interfaces/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
// export class ProfileUserComponent implements OnInit {
export class ProfileUserComponent {
  profileForm: FormGroup;
  user: User | null = null; // Initialize user as null or undefined

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private userService: UserServiceService
  ) {
    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.userService.getUserById(currentUser.userId).subscribe(
        (user: User) => {
          this.user = user;
          this.populateForm(user);
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }

  populateForm(user: User): void {
    this.profileForm.patchValue({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: '' // Assuming you don't want to display the password in the form
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid && this.user) {
      const updatedUser = {
        ...this.user,
        ...this.profileForm.value
      };
      this.userService.updateUser(updatedUser.userId, updatedUser).subscribe(
        () => {
          alert('Profile updated successfully');
        },
        error => {
          alert('An error occurred while updating the profile');
          console.error('Update profile error:', error);
        }
      );
    }
  }
}
