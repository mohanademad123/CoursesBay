import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DailogComponent } from 'src/app/shared/components/dailog/dailog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  getData:any;
  emtpty:boolean=false;
  TotalPrice:number=0;
  ngOnInit(): void {
    this.getDataCours();
  }

  constructor(private cartservice:CartService,public dialog:MatDialog){

  }
  welldone(){

    Swal.fire({
      title: 'Hello!',
      text: 'Deleted cours successfully',
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
  getDataCours(){

  this.cartservice.getdataCourse().subscribe((ele:any)=>{
    this.getData = ele;
    this.getTotalprice()
  })
  }
  deleteitem(item:any){
    this.cartservice.deleteCartitem(item).subscribe((ele)=>{
      this.getDataCours();
      this.getTotalprice();
     this.welldone();
    },error=>{
      this.Error(error.message);
    })
  }

  getTotalprice() {
    this.TotalPrice = 0;
    if (this.getData && this.getData.length) {
      for (let i = 0; i < this.getData.length; i++) {
        this.TotalPrice += this.getData[i].price;

      }
    }else if(this.TotalPrice ===0){
      this.emtpty = true;
    }else{
      this.emtpty = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DailogComponent, {
  width: '400px',
      data: "admin"
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

