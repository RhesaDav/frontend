import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentServiceService) { }
  students: Student[]=[]
  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(result => {
      this.students= result
      console.log(this.students)
    })
  }

}
