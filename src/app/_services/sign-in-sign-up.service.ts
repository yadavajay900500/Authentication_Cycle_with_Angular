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
    return this.http.post(`${this.BASEURL}signUp`, body)
  }
  
  userSignIn(body: any) {
    return this.http.post(`${this.BASEURL}signIn`, body)
     
  }
GenerateRefreshToken() {
  let input = {
    "jwtToken": this.rootservice.getToken('TOKEN'),
    "refreshToken": this.rootservice.getRefrshToken('REFRESH_TOKEN')
  }
  this.rootservice.logout();
  return this.http.post(`${this.BASEURL}signIn` + 'refresh', input);
}
}
