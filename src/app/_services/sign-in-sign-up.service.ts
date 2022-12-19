import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Injectable({
  providedIn: 'root'
})
export class SignInSignUpService {

  rootservice: any
  BASEURL: string;
    constructor(private http: HttpClient, private router: Router,
    ) {
    this.rootservice = AppService
    this.BASEURL = AppService.BASEURL
  }

  userSignUp(body: any) {
    console.log("mmmmmmmmmmmmmmmm", body)
    return this.http.post(`${this.BASEURL}signUp`, body)
      .subscribe({
        next: (res: any) => {
          console.log("Successfull Signup")
        },
        error: (e) => {
          console.log("SignUp Failes!", e)
        }
      })
  }
  
  userSignIn(body: any) {
    console.log(">>>>>>>>>>",body)
    return this.http.post(`${this.BASEURL}SignIn`, body)
      // .subscribe({
      //   next: (res: any) => {
      //     console.log("Successfull Login !", res.userData)
      //     const id=res.userData._id
      //     // alert("Successfull Login !")
      //     this.rootservice.setToken(res.userData)
      //     this.router.navigateByUrl("/admin")
      //   },
      //   error: (e) => {
      //     console.log("Something Wrong !", e)
      //     this.router.navigateByUrl('/logIn');
      //   }
      // })
  }

  toDoListAdd(body: any) {
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

}
