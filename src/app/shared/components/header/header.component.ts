import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/carts/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartLength: number = 0;

  constructor(private cartService: CartService){

  }
ngOnInit(): void {
  this.cartService.cartItems$.subscribe(items => {
  this.cartLength = items.length;
})
this.menupar();
// this.scrollHeader();

}

menupar() {
  let headermenu = document.getElementById('menu');
  let navbar = document.querySelector('.header_links ul');

  headermenu?.addEventListener('click', () => {
    if (navbar?.classList.contains('active')) {
      if (headermenu) {
        headermenu.textContent = 'menu';
      }
    } else {
      if (headermenu) {
        headermenu.textContent = 'close';
      }
    }
    navbar?.classList.toggle('active');
  });
}


// scrollHeader() {
//   let header = document.querySelector('header');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//       header?.classList.add('scrolled');
//     } else {
//       header?.classList.remove('scrolled');
//     }
//   });
// }

}
