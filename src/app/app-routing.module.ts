import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdComponent } from './components/curd/curd.component';
import { MeanComponent } from './components/mean/mean.component';

const routes: Routes = [
  {path:'', component:MeanComponent},
  {path:'curd', component:CurdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
