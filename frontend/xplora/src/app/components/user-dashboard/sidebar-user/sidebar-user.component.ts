import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  standalone: true,
  templateUrl: './sidebar-user.component.html',
  styleUrl: './sidebar-user.component.css'
})
export class SidebarUserComponent {
  @Output() selectSection = new EventEmitter<string>();

  onSelectSection(section: string) {
    this.selectSection.emit(section);
  }
}
