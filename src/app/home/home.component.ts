import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { TeacherService } from '../services/teacher.service';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
totalStudent = 0
totalTeacher = 0
totalParent = 0
  constructor(private studentService:StudentServiceService,  private teacherService: TeacherService, private parentService: ParentService) { }

  ngOnInit(): void {
    this._studentInit()
    this._teacherInit()
  }
  private _studentInit(){
    this.studentService.getTotalStudent().subscribe((result) => {
      console.log(result)
      this.totalStudent = result.totalStudent
    })
  }
  private _teacherInit(){
    this.teacherService.getTotalTeacher().subscribe((result) => {
      console.log(result)
      this.totalTeacher = result.totalTeacher
    })
  }
  private _parentInit(){
    this.parentService.getTotalParent().subscribe((result) => {
      console.log(result)
      this.totalParent = result.totalParent
    })
  }

}
