import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AppService } from '../app.service';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  appService;
  constructor() {
    this.appService = AppService
  }
  helper = new JwtHelperService();
  intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = sessionStorage.getItem('TOKEN');
    const isExpired = this.helper.isTokenExpired(token);
    if (token) {
      const tokenizedReq = requestToHandle.clone({ headers: requestToHandle.headers.set('token', token) });
      return next.handle(tokenizedReq)   
      // return next.handle(tokenizedReq).pipe(retry(2));   
    }
    return next.handle(requestToHandle);
  }
}
