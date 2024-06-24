import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-couse-details',
  templateUrl: './post-couse-details.component.html',
  styleUrls: ['./post-couse-details.component.scss']
})
export class PostCouseDetailsComponent implements OnInit {
  couseDetail: any = {};
  getDataInstorage: any;
  id!: any;
  constructor(
    private route: ActivatedRoute,
    private courservice: CourseService
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getAllDatainstorage();
    this.getcoursebyID();
  }
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

  getcoursebyID() {
    this.courservice.getAllCourseId(this.id).subscribe((ele: any) => {
      this.couseDetail = ele;
    });
  }
  getAllDatainstorage() {
    this.courservice.getDataFromStoage().subscribe((ele: any) => {
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
      this.Error('This course already exists');
      return;
    }

    this.courservice.postdata(model).subscribe(
      (ele: any) => {
        this.getAllDatainstorage();
        console.log('Post success');
        this.welldone()
      },
      (error) => {
        this.Error(error.message)
      }
    );
  }
}
