import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';
import { SignInSignUpService } from '../_services/sign-in-sign-up.service';
import { AppService } from '../app.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  rootService;
  constructor(private inject: Injector) { 
    this.rootService=AppService
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(SignInSignUpService);
    let authreq = request;
   
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
         return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );
  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.inject.get(SignInSignUpService);
    return authservice.GenerateRefreshToken()
    .pipe(
      switchMap((data: any) => {
        console.log("datadatadatadata",data)
        const accessToken=data.userData.TOKEN
        const refreshToken=data.userData.refreshToken
        this.rootService.setToken(accessToken);
        this.rootService.setRefrshToken(refreshToken)
        return next.handle(request)
      }),
      catchError(errodata=>{
        return throwError(errodata)
      })
    );
  }

  
  
}
