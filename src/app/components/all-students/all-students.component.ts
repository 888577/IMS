import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
 
  public students:any=[];
  public column :string="";
  public order:string="";
  public term:string="";
  constructor(private _studentService:StudentService) {
    this._studentService.getStudents().subscribe(
      (data:any)=>{
      this.students=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

  ngOnInit(): void {
  }
  pagination(page:number){
    this._studentService.getPagedStudents(page).subscribe(
      (data:any)=>{
      this.students=data;
      },
      (err:any)=>{
        alert("internal server down");
      }
    )
  }
  sort(){
    this._studentService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server down");
      }
    )
  }
  filter(){
    this._studentService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("internal server down");
      }
    )
  }

}
