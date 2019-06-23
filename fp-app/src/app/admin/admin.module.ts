import { NgModule } from '@angular/core';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
  ]
})
export class AdminModule { }
