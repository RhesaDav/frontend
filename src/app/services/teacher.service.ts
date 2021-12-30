import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  getTotalTeacher():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/teacher/count')
  }
}
