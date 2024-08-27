import { Component } from '@angular/core';
import { GifsService } from './../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  get tags() {
    return this.GifsService.tagHistory;
  }

  onSelectTag(tag: string): void {
    if (tag === this.GifsService.currentTag) return;

    this.GifsService.searchTag(tag);
  }
}
