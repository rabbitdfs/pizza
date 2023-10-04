import {Injectable} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environmentDevelopment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public products: ProductType[] = [];

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environmentDevelopment.apiURL + 'pizzas')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environmentDevelopment.apiURL + `pizzas?id=${id}`)
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(environmentDevelopment.apiURL + `order-pizza`, data)
  }
}
