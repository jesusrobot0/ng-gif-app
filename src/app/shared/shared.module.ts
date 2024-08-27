import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ********** COMPONENTS ********** */
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyimageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [SidebarComponent, LazyimageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyimageComponent],
})
export class SharedModule {}
