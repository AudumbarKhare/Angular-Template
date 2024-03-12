import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLevelThreeOneComponent } from './products-level-three-one/products-level-three-one.component';
import { ProductsLevelThreeTwoComponent } from './products-level-three-two/products-level-three-two.component';


@NgModule({
  declarations: [
    ProductsLevelThreeOneComponent,
    ProductsLevelThreeTwoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
