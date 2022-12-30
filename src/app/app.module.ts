import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialModule/material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule ,HTTP_INTERCEPTORS}  from '@angular/common/http';
import { AuthGuard } from './_authGuard/auth.guard';
import { InterceptorService } from './_interceptor/interceptor.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from "@angular/forms";
import { ModalComponent } from './component/modal/modal.component';
import { PasswordStrengthCustomComponent } from './component/password-strength-custom/password-strength-custom.component';
import { AllSelectComponent } from './component/all-select/all-select.component';
import { httpInterceptorProviders } from './_interceptor';
import { LoaderComponent } from './component/loader/loader.component';
import { LoaderInterceptor } from './_interceptor/loader.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
   
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    
    ModalComponent,
   
    PasswordStrengthCustomComponent,
    AllSelectComponent,
    LoaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MdbModalModule,
    FormsModule,
    MatProgressSpinnerModule
  



  ],
  
  providers: [
     
     httpInterceptorProviders
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
