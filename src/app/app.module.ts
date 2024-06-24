
// import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursePrdModule } from './course-prd/course-prd.module';
import { CartsModule } from './carts/carts.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';

interface NgxSpinnerConfig {
  type?: string;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoursePrdModule,
    CartsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-clip-rotate' }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
