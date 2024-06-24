import { compileInjectable } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CourseService } from 'src/app/course-prd/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {
  newtaskForm!: FormGroup;
  filename = '';
  formsValuse: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddDialogComponent>,
    public matDialog: MatDialog,
    private spinner: NgxSpinnerService,
    private services: CourseService
  ) {}

  ngOnInit(): void {

    this.createForm();
  }
  welldone(data:any){

    Swal.fire({
      title: 'success',
      text: data,
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
  createForm() {
    this.newtaskForm = this.fb.group({
      title: [this.data?.title || '', Validators.required],
      image: [this.data?.image || '', Validators.required],
      description: [this.data?.description || '', Validators.required],
      price: [this.data?.price || '', Validators.required],
      oldPrice: [this.data?.oldPrice || '', Validators.required]
    });
    console.log(this.newtaskForm.value)
  }


  UpdataCourses(){
 const taskData = {
      title: this.newtaskForm.value.title,
      image: this.newtaskForm.value.image,
      description: this.newtaskForm.value.description,
      price: this.newtaskForm.value.price,
      oldPrice: this.newtaskForm.value.oldPrice

    };
    this.services.UpdataCourse(taskData,this.data.id).subscribe((ele: any) => {
      this.welldone("updata Course success");
      this.close()
    },error=>{
      this.Error(error.message);
    });
  }
  selectImg(value: any) {
    this.filename = value.target.value;
    this.newtaskForm.get('image')?.setValue(value.target.files[0]);

    // Preview the selected image
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.newtaskForm.get('image')?.setValue(event.target.result);
    };
    reader.readAsDataURL(value.target.files[0]);
  }

  close() {
    this.dialog.close();
  }

  CreateCourse() {
    const taskData = {
      title: this.newtaskForm.value.title,
      image: this.newtaskForm.value.image,
      description: this.newtaskForm.value.description,
      price: this.newtaskForm.value.price,
      oldPrice: this.newtaskForm.value.oldPrice,
      language:this.newtaskForm.value.title
    };
    this.services.postCourse(taskData).subscribe((ele: any) => {
      this.welldone("Add Course success");
      this.close()
    });
  }
}
