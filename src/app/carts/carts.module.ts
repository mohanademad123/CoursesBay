import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { MatrialModule } from '../material/matrial.module';
import { DataTransformPipe } from './components/pipe/data-transform.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    DataTransformPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartsModule { }
