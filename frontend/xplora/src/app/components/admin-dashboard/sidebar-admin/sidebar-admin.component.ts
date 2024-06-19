import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.css'
})
export class SidebarAdminComponent {
  @Output() selectSection = new EventEmitter<string>();

  onSelectSection(section: string) {
    this.selectSection.emit(section);
  }
}
