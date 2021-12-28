import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDoughnutComponent } from './component/chart-doughnut/chart-doughnut.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'chart', component: ChartDoughnutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
