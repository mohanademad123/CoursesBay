import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent {
data:boolean=false;

constructor(private dialog:MatDialog){

}

welldone(){

    Swal.fire({
      title: 'Hello!',
      text: 'thank you for pay course',
      icon: 'success',
    });

}
close(){
 this.dialog.closeAll()

}
}
