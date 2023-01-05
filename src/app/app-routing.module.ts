import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './_authGuard/auth.guard';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminHomeComponent } from './dashboard/pages/admin-home/admin-home.component';
import { UploadsFilesComponent } from './component/uploads-files/uploads-files.component';

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
    path:"adminProfile", component:AdminProfileComponent
  },
  {
    path:'admin', component:AdminHomeComponent,canActivate: [AuthGuard] ,
   children:[{
     loadChildren:()=>import("./dashboard/admin.module").then((m)=>m.AdminModule),
     path:"" 
    }],
  },
  {
    path:"uploadFile",component:UploadsFilesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
