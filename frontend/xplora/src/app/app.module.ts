import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TourService } from './services/tourService/tour-service.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ManageToursComponent } from './components/admin-dashboard/managetours/managetours.component';

const routes: Routes = [
  { path: 'manage-tours', component: ManageToursComponent },
  { path: '', redirectTo: 'manage-tours', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AppComponent,
    ManageToursComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
