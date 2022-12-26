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
    const token:any = sessionStorage.getItem('TOKEN');
    authreq = this.AddTokenheader(request, token);
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          // need to implement logout
          this.rootService.logout();
          // refresh token logic
         return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );
  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.inject.get(SignInSignUpService);
    return authservice.GenerateRefreshToken().pipe(
      switchMap((data: any) => {
        console.log("+++++++++++++",data)
        this.rootService.setToken(data);
        return next.handle(this.AddTokenheader(request,data.jwtToken))
      }),
      catchError(errodata=>{
        this.rootService.logout();
        return throwError(errodata)
      })
    );
  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', token) });
  }

  
}
