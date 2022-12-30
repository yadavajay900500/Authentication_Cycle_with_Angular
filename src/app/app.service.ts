import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private behaviorSubjectData=new BehaviorSubject({viewLoad:false})
  private behaviorSubjectObseverData= this.behaviorSubjectData.asObservable();



  setData(data:any){
    return this.behaviorSubjectData.next(data)
  }

  getData(){
    return this.behaviorSubjectObseverData
  }

  static TOKEN_KEY="TOKEN"
  static REFRESH_TOKEN_KEY="REFRESH_TOKEN"
  static BASEURL="http://localhost:5050/"


  
  static setToken = (token: string) => {
    sessionStorage.setItem(AppService.TOKEN_KEY, token)
  }
  static setRefrshToken = (token: string) => {
    sessionStorage.setItem(AppService.REFRESH_TOKEN_KEY, token)
  }
  static removeToken = () => {
    sessionStorage.removeItem(AppService.TOKEN_KEY)
  }

  static getToken = () => {
    return sessionStorage.getItem("TOKEN");
  }
 

  static logout(){
      window.sessionStorage.clear();
    }
  }




