import { Component } from '@angular/core';
import { SidebarUserComponent } from '../../components/user-dashboard/sidebar-user/sidebar-user.component';
import { NavbarUserComponent } from '../../components/user-dashboard/navbar-user/navbar-user.component';
import { DashboardUserComponent} from './dashboard-user/dashboard-user.component';
import { ProfileUserComponent } from '../../components/user-dashboard/profile-user/profile-user.component';
import { MyBookingsComponent } from '../../components/user-dashboard/my-bookings/my-bookings.component';
import { MyReviewsComponent } from '../../components/user-dashboard/my-reviews/my-reviews.component';
import { LogoutUserComponent } from '../../components/user-dashboard/logout-user/logout-user.component';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,
    NavbarUserComponent,
    SidebarUserComponent,
    DashboardUserComponent,
    ProfileUserComponent,
    MyBookingsComponent,
    MyReviewsComponent,
    LogoutUserComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  selectedSection: string = 'dashboard';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}

