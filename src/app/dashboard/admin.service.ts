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
  
  toDoListAdd(body: any) {
    console.log("tootoo",body)
    return this.http.post(`${this.BASEURL}add`, body)
      .subscribe({
        next: (res: any) => {
          console.log("Successfull Add Data !", res.userData)
        },
        error: (e) => {
          console.log("Something Wrong !", e)
        }
      })
  }

  toDoListRemove(body: any) {
    return this.http.post(`${this.BASEURL}remove`, body)
      .subscribe({
        next: (res: any) => {
          console.log("Successfull Remove !", res.userData)
        },
        error: (e) => {
          console.log("Something Wrong !", e)
        }
      })
  }
  toDoListUpadate(body: any) {
    return this.http.post(`${this.BASEURL}update`, body)
      .subscribe({
        next: (res: any) => {
          console.log("Successfull Update !", res.userData)
        },
        error: (e) => {
          console.log("Something Wrong !", e)
        }
      })
  }

  allNewUser() {
    return this.http.get(`${this.BASEURL}newUserApplication`)
      
  }

  accountApproved(body:any){
    return this.http.patch(`${this.BASEURL}verifyAccount`,body)
  }
}
