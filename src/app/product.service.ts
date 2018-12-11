import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {Product} from './product';
import { PRODUCTS } from './mock-product';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = "http://59a7d1a3d2f121001138b3b9.mockapi.io/api";
@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private http:HttpClient){}
    getProducts():Observable<Product[]>{
        return of(PRODUCTS);
    }
    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(API_URL+'/products');
    }
}