import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  getTotalStudent():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/student/count')
  }
  getAllStudent():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/student')
  }
}
