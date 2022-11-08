import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }
  getStudent(id:any):Observable<any>{
return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
  }
  getStudents():Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }
  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+term);
  }
  getPagedStudents(page:number):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page="+page);
  }
  getSortedStudents(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students '+'?sortBy='+column+order'");
  }
  createStudent(data:any):Observable<any>{
    return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data);
  }
  updateStudent(id:string,data:any):Observable<any>{
    return this._httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id,data);
  }
  deleteStudent(id:string):Observable<any>{
    return this._httpClient.delete("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
  }

}
