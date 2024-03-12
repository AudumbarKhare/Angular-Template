import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens.component';
import { ListCoupensComponent } from './list-coupens/list-coupens.component';

const routes: Routes = [
  {
    path:'create',
    component:CoupensComponent
  },
  {
    path:'list',
    component:ListCoupensComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
