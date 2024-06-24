import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PannerComponent } from './components/panner/panner.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatrialModule } from '../material/matrial.module';
import { RouterModule } from '@angular/router';
import { DailogComponent } from './components/dailog/dailog.component';
import { DocumentComponent } from './components/document/document.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureTopicsComponent } from './components/feature-topics/feature-topics.component';
import { TrustedComponent } from './components/trusted/trusted.component';
import { ReviewComponent } from './components/review/review.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PricesComponent } from './components/prices/prices.component';


@NgModule({
  declarations: [HeaderComponent, PannerComponent, FooterComponent, DailogComponent, DocumentComponent, AboutComponent, FeatureTopicsComponent, TrustedComponent, ReviewComponent, AddDialogComponent, PricesComponent],
  imports: [CommonModule,MatrialModule,RouterModule,FormsModule,ReactiveFormsModule,
    MatNativeDateModule,
  ],
  exports: [HeaderComponent, PannerComponent, FooterComponent,MatrialModule,DocumentComponent,AboutComponent,FeatureTopicsComponent,TrustedComponent,ReviewComponent,AddDialogComponent,PricesComponent],
})
export class SharedModule {}
