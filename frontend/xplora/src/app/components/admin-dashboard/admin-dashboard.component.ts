import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../components/admin-dashboard/sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from '../../components/admin-dashboard/navbar-admin/navbar-admin.component';
import { DashboardAdminComponent } from '../../components/admin-dashboard/dashboard-admin/dashboard-admin.component';
import { ManagetoursComponent } from '../../components/admin-dashboard/managetours/managetours.component';
import { ManageusersComponent } from '../../components/admin-dashboard/manageusers/manageusers.component';
import { SettingsComponent } from '../../components/admin-dashboard/settings/settings.component';
import { LogoutAdminComponent } from '../../components/admin-dashboard/logout-admin/logout-admin.component';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,
    NavbarAdminComponent,
    SidebarAdminComponent,
    DashboardAdminComponent,
    ManagetoursComponent,
    ManageusersComponent,
    SettingsComponent,
    LogoutAdminComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  selectedSection: string = 'home';
  onSectionSelected(section: string){
    this.selectedSection = section;
  }
}

