import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { TokenInterceptorService } from '../_authGuard/token-interceptor.service';
import { LoaderInterceptor } from './loader.interceptor';



export const httpInterceptorProviders=[
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService,multi: true},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
]