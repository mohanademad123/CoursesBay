import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],

})
export class CoursesComponent implements OnInit {
  getallcourseData!: any[];
  getallpostcourseData!: any[];
  getDataInstorage: any;
  currentPage: number = 1;
  ngOnInit(): void {
    this.getAllCourses();
    this.getAllDatainstorage();
    this.getAllcoursesposting()
  }
  constructor(
    private courseService: CourseService
  ) { }
  welldone(){

    Swal.fire({
      title: 'Hello!',
      text: 'Add to Card successfully',
      icon: 'success',
    });

}
Error(data:any){

  Swal.fire({
    title: 'Error!',
    text: data,
    icon: 'error',
  });

}
  getAllCourses() {
    this.getallcourseData = this.courseService.getAlldata();
  }

  getAllDatainstorage() {
    this.courseService.getDataFromStoage().subscribe((ele: any) => {
      this.getDataInstorage = ele;
    });
  }
  addtocar(item: any) {
    const model = {
      image: item.image,
      title: item.title,
      description: item.description,
      price: item.price,
      oldPrice: item.oldPrice,
    };

    // Check if the item already exists in the storage
    const existingItem = this.getDataInstorage.some(
      (storageItem: any) => storageItem.image === item.image
    );

    if (existingItem) {
      this.Error("This course already exists")
      return;
    }

    this.courseService.postdata(model).subscribe(
      (ele: any) => {
        this.getAllDatainstorage();

        this.welldone()
      },
      (error) => {
        this.Error(error.message)
      }
    );
  }
  getAllcoursesposting(){
this.courseService.getAllCourse().subscribe((ele:any)=>{
  this.getallpostcourseData = ele;

})
  }
}
