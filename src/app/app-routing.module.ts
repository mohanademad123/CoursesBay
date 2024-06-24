import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { CoursesComponent } from './course-prd/components/courses/courses.component';
import { CoursesDetailsComponent } from './course-prd/components/courses-details/courses-details.component';
import { AddCourseComponent } from './course-prd/components/add-course/add-course.component';
import { PostCouseDetailsComponent } from './course-prd/components/post-couse-details/post-couse-details.component';
import { PricesComponent } from './shared/components/prices/prices.component';

const routes: Routes = [
  {path:'',redirectTo:'course',pathMatch:'full'},

    {path:'Details/:id', component:CoursesDetailsComponent},
  {path:'course',component:CoursesComponent},
  {path:'addcorse',component:AddCourseComponent},
  {path:'courseDetails/:id',component:PostCouseDetailsComponent},
  {path:'prices',component:PricesComponent},


  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
