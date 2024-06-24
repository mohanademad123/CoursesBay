import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TransformPipe } from './components/pipe/transform.pipe';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { PostCouseDetailsComponent } from './components/post-couse-details/post-couse-details.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent,
    TransformPipe,
    AddCourseComponent,
    PostCouseDetailsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     HttpClientModule,
     RouterModule


  ],
  exports:[
    CoursesComponent,
    CoursesDetailsComponent,
    NgxPaginationModule,
    RouterModule,
    AddCourseComponent,
    PostCouseDetailsComponent

  ],
  providers:[PaginationControlsDirective]

})
export class CoursePrdModule { }
