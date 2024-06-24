import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { User } from '../../../interfaces/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manageusers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Error fetching users', error);
        // Handle error if needed
      }
    );
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.fetchUsers(); // Refresh users after deletion
      },
      (error: any) => {
        console.error('Error deleting user', error);
        // Handle error if needed
      }
    );
  }
}
