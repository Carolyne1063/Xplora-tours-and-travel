import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  title:string = 'Xplora'
  navBarHome:string = 'Home'
  navBarTours:string = 'Tours'
  navBarAbout:string = 'About Us'
  navBarContact:string = 'Contact Us'
}
