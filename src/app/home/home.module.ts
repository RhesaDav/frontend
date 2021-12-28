import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class HomeModule { }