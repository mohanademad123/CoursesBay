import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/shared/components/add-dialog/add-dialog.component';
import { CourseService } from '../../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  getallcourseData:any;
  constructor(private dialog:MatDialog,private services:CourseService){

  }
  ngOnInit(): void {
this.getAllcourses()
  }

  welldone(){

    Swal.fire({
      title: 'Hello!',
      text: 'delete course successfully',
      icon: 'success',
    });

}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
  width: '750px',
  // height:'550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllcourses()
    });
  }

  getAllcourses(){
    this.services.getAllCourse().subscribe(ele=>{
      this.getallcourseData = ele
    })
  }

  deleteCouse(id:number){
    this.services.deleteCourse(id).subscribe((ele:any)=>{
      this.welldone()
      this.getAllcourses()
    })
  }

  UbdateCourse(item:any){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '750px',
      data:item
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');

             this.getAllcourses()


        });
  }
}
