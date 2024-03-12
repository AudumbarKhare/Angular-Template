import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupensComponent } from './coupens.component';
import { ListCoupensComponent } from './list-coupens/list-coupens.component';


@NgModule({
  declarations: [
    CoupensComponent,
    ListCoupensComponent
  ],
  imports: [
    CommonModule,
    CoupensRoutingModule
  ]
})
export class CoupensModule { }
