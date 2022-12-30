import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,HTTP_INTERCEPTORS,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { AppService } from '../app.service';
 import { AuthGuard } from '../_authGuard/auth.guard';
 import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private isRefreshing = false;
  appService;
  constructor() {
    this.appService = AppService
  }
   helper = new JwtHelperService();

  intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token:any = sessionStorage.getItem('TOKEN');
    const isExpired = this.helper.isTokenExpired(token);
    console.log("iiiiiiiiiiiiiiiiiiiiiiii",isExpired,token)






    
   if(token){
    const tokenizedReq = requestToHandle.clone({ headers: requestToHandle.headers.set('token',token) });
    return next.handle(tokenizedReq);

   }
    
    return next.handle(requestToHandle);

  }


}
