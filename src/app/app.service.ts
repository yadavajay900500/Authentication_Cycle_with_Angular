import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs'

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private behaviorSubjectData=new BehaviorSubject({viewLoad:false})
  private behaviorSubjectObseverData=this.behaviorSubjectData.asObservable();



  setData(data:any){
    return this.behaviorSubjectData.next(data)
  }

  getData(){
    return this.behaviorSubjectObseverData
  }

  static TOKEN_KEY="TOKEN"
  static BASEURL="http://localhost:5050/"


  
  static setToken = (token: string) => {
    sessionStorage.setItem(AppService.TOKEN_KEY, token)
  }
  static removeToken = () => {
    sessionStorage.removeItem(AppService.TOKEN_KEY)
  }

  static getToken = () => {
    return sessionStorage.getItem("TOKEN");
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }



}
