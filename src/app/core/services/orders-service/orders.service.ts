import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../../interfaces/order.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface OrdersResponse {
  count: number,
  order: Array<IOrder>
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrdersList(): Observable<Array<IOrder>> {
    return this.http.get<OrdersResponse>('https://api.mocki.io/v2/79fb05cb')
        .pipe(
            map(response => response.order.map(order => ({...order, isFavorite: false}))),
        )
  }
}
