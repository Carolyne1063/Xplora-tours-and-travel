import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  catchPhrase= 'Discover Kenya With Us'

  landingImage='data:image/jpeg;base64,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'
  landingImage1='data:image/jpeg;base64,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'
  landingImage2='https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg'
  landingImage3='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/966117e6-2158-4095-8416-b31e9df72aba/ce4319d0-5e00-40da-b1f8-67db09a009f3.png'
}