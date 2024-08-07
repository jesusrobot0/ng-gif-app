import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ********** COMPONENTS ********** */
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent]
})
export class SharedModule { }
