import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable( {
  providedIn: "root"
} )
export class AuthService {

  constructor ( private http: HttpClient ) { }

  login (email: string, password: string) {
    return this.http.post( `http://localhost:8090/api/Account/Login`, { email, password } )
  }


  register (registerData: { name: string; email: string; password: string; mobileNumber: string }) {
    return this.http.post( `http://localhost:8090/api/Account/Register`, registerData )
  }

}
