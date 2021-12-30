import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    function toggleSidebar(a:any){
      document.getElementById("sidebar").classList.toggle('active');
    }
  }

}
