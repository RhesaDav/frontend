import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './home/home.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ChartBarComponent } from './component/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from './component/chart-doughnut/chart-doughnut.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentComponent } from './parent/parent.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChartBarComponent,
    ChartDoughnutComponent,
    CalendarComponent,
    TeacherComponent,
    ParentComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgChartsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// { 
//   provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
//   multi: true,
// }