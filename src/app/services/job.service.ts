import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
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

  getAllJobs () {
    return this.http.get( `http://localhost:8090/api/Jobs/getAllJobs?page=1&pageSize=10`,this.httpOption )
  }

  deleteJob (id:number) {
    return this.http.delete( `http://localhost:8090/api/Jobs/deleteJob/${id}`,this.httpOption )
  }

  addJob (jobData: { name: string; description: string;
                     validFrom: string; validTo: string;
                     maxApplicants: number; categoryId: number;
                     jobSkills: number[]; jobResponsabilities: number[]; 
                    }) {
    return this.http.post( `http://localhost:8090/api/Jobs/AddJob`, jobData )
  }
}
