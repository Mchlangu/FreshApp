import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorListComponent } from './Components/motor-list/motor-list.component';
import { MotorDetailComponent } from './Components/motor-detail/motor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'motor', pathMatch: 'full' },
  { path: 'motor', component: MotorListComponent},
  { path: 'motor/:id', component: MotorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
