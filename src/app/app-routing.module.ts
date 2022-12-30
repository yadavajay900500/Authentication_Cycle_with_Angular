import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './_authGuard/auth.guard';

import { AdminHomeComponent } from './dashboard/pages/admin-home/admin-home.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"signUp", component:SignUpComponent
  },
  {
    path:"signIn", component:SignInComponent
  },
  {
    path:"profile",component:ProfileComponent 

  },
 


  {
    path:'admin', component:AdminHomeComponent,canActivate: [AuthGuard] ,
   children:[{
     loadChildren:()=>import("./dashboard/admin.module").then((m)=>m.AdminModule),
     path:"" 
    }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
