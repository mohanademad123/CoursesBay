import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/shared/components/add-dialog/add-dialog.component';
import { CourseService } from '../../services/course.service';
import Swal from 'sweetalert2';
import { retry } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  getallcourseData: any;

  constructor(private dialog: MatDialog, private services: CourseService) {}

  ngOnInit(): void {
    this.getAllcourses();
  }

  welldone() {
    Swal.fire({
      title: 'Hello!',
      text: 'Delete course successfully',
      icon: 'success',
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getAllcourses();
    });
  }

  getAllcourses() {
    this.services.getAllCourse().subscribe(
      (ele) => {
        this.getallcourseData = ele;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCouse(id: number) {
    this.services.deleteCourse(id).pipe(retry(3)).subscribe(
      (ele: any) => {
        this.welldone();
        this.getAllcourses();
        this.getallcourseData = this.getallcourseData.filter((item: any) => item.id !== id);
      },
      (error) => {
        console.error('Delete course failed after 3 retries', error);
      }
    );
  }

  UbdateCourse(item: any): void {

    if(item != null || item != undefined){

    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '750px',
      data: item,
    });
 dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      const index = this.getallcourseData.findIndex((i: any) => i.id === item.id);
      if (index !== -1) {
        this.getallcourseData[index] = result;
      }
      this.getAllcourses();
    });
    }


  }
}
