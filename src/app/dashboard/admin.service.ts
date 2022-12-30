import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  rootservice: any
  BASEURL: string;
  constructor(
    private http: HttpClient, private router: Router,
  ) { 
    this.rootservice = AppService
    this.BASEURL = AppService.BASEURL
  }
  
  
  toDoListAdd(body:any) {
    return this.http.post(`${this.BASEURL}add`, body)
  }

  toDoListRemove(body: any) {
    return this.http.post(`${this.BASEURL}remove`, body)
  }

  toDoListUpadate(body: any) {
    return this.http.patch(`${this.BASEURL}update`, body)
  }

  getAllTasks(body:any){
   return this.http.get(`${this.BASEURL}getTask?email=${body}`)
  }
 

  allNewUser() {
    return this.http.get(`${this.BASEURL}newUserApplication`)
      
  }

  accountApproved(body:any){
    return this.http.patch(`${this.BASEURL}verifyAccount`,body)
  }

  getUserList(){
    return this.http.get(`${this.BASEURL}allApplication`)
   }
 
   updateToUserList(data:any){
    return this.http.patch(`${this.BASEURL}updateStatus`, data)
   }
}
