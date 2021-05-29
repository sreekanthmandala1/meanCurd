import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UxProductsService {
  url = 'https://mern-781b3-default-rtdb.firebaseio.com/products.json';
  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({'Content-Type' : 'sreekanthApp/json'});

  saveProducts(products:any[]){
    // return this.http.post(this.url,products);
    return this.http.put(this.url,products,{headers : this.headers});
  }

  fetchProducts(){
    return this.http.get(this.url);
  }

  getDataTitle(){
    return this.http.get('https://mern-781b3-default-rtdb.firebaseio.com/dataTitle.json');
  }
}
