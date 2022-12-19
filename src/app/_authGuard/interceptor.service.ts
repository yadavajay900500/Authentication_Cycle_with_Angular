import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest,HTTP_INTERCEPTORS,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { AppService } from '../app.service';
// import { JwtHelperService } from '@auth0/angular-jwt';
 import { AuthGuard } from './auth.guard';
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
    // Getting token form local storage
    const token:any = sessionStorage.getItem('TOKEN');
    const isExpired = this.helper.isTokenExpired(token);
    console.log("iiiiiiiiiiiiiiiiiiiiiiii",isExpired,token)






    // Clone our request with the new headers because HttpRequests are immutable
   if(token){
    const tokenizedReq = requestToHandle.clone({ headers: requestToHandle.headers.set('Authorization', 'Bearer ' + token) });
    return next.handle(tokenizedReq);

   }
    // Last step is to return an Observable that will send the request or pass the request to the next interceptor if any
    return next.handle(requestToHandle);

  }


}
// //**************************************************************************************//



// import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { AppService } from '../app.service';
// // import { JwtHelperService } from '@auth0/angular-jwt';
// import { AuthGuard } from './auth.guard';
// import { JwtHelperService } from "@auth0/angular-jwt";
// import { catchError, switchMap } from 'rxjs/operators';
// import { StorageService } from '../_services/storage.service';
// import { EventBusService } from '../_shared/event-bus.service';
// import { EventData } from '../_shared/event.class';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptorService implements HttpInterceptor {
//   private isRefreshing = false;
//   appService;
//   constructor(private storage:StorageService,
//     private eventBusService:EventBusService
//     ) {
//     this.appService = AppService
//   }
//   helper = new JwtHelperService();

//   intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Getting token form local storage
//     const token: any = sessionStorage.getItem('TOKEN');
//     const isExpired = this.helper.isTokenExpired(token);
//     console.log("iiiiiiiiiiiiiiiiiiiiiiii", isExpired)
//     if(token){
//   // Clone our request with the new headers because HttpRequests are immutable
//       const tokenizedReq = requestToHandle.clone({ headers: requestToHandle.headers.set('Authorization', 'Bearer ' + token) });
//       return next.handle(tokenizedReq);
//      }
//     requestToHandle = requestToHandle.clone({
//       withCredentials: true,
//     });
//     return next.handle(requestToHandle).pipe(
//       catchError((error: any) => {
//         if (
//           error instanceof HttpErrorResponse &&
//           !requestToHandle.url.includes('SignIn') &&
//           error.status === 401
//         ) {
//           return this.handle401Error(requestToHandle, next);
//         }

//         return throwError(() => error);
//       })
//     );
//   }

//   private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
//     if (!this.isRefreshing) {
//       this.isRefreshing = true;
//       if (this.storage.isLoggedIn()) {
//         this.eventBusService.emit(new EventData('logout', null));
//       }
//     }
//     // Last step is to return an Observable that will send the request or pass the request to the next interceptor if any
//     return next.handle(request);
//   }
  




   
//     // return next.handle(requestToHandle);

//   // }


// }
