import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  token = localStorage.getItem( 'token' )
  
  httpOption;
  constructor(private http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${this.token}`
      })
    };
  }

  getAllCategories () {
    return this.http.get( `http://localhost:8090/api/Categories/getAllCategories`,this.httpOption )
  }

}
