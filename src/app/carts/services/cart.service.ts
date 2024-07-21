import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private URL:string = environment.apiUrl;
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  private loadInitialData() {
    this.getdataCourse().subscribe((items: any[]) => {
      this.cartItems.next(items);
    });
  }

  getdataCourse() {
    return this.http.get<any[]>(`${this.URL}/CartsData`).pipe(
      tap(items => this.cartItems.next(items))
    );
  }

  deleteCartitem(item: number) {
    return this.http.delete(`${this.URL}/CartsData/` + item).pipe(
      tap(() => {
        const currentItems = this.cartItems.value.filter(i => i.id !== item);
        this.cartItems.next(currentItems);
      })
    );
  }

  getCartLength() {
    return this.cartItems.value.length;
  }
  updateCartLength() {
    this.getdataCourse().subscribe((items: any[]) => {
      this.cartItems.next(items);
    });
  }

}
