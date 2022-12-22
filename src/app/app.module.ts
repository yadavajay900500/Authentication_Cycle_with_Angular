import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialModule/material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule ,HTTP_INTERCEPTORS}  from '@angular/common/http';
import { SignUpUserComponent } from './component/sign-up-user/sign-up-user.component';
import { AuthGuard } from './_authGuard/auth.guard';
import { InterceptorService } from './_authGuard/interceptor.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from "@angular/forms";
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component'
import { ModalComponent } from './component/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    SignUpUserComponent,
    ModalComponent,
    AdminProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MdbModalModule,
    FormsModule



  ],
  
  providers: [
     // Tell angular to use this interceptor
    //  { provide: HTTP_INTERCEPTORS, useClass: AuthGuard, multi: true }
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
