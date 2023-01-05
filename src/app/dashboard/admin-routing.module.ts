import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_authGuard/auth.guard';
import { DragDropComponent } from './component/drag-drop/drag-drop.component';
import { AdminDiplayComponent } from './pages/admin-diplay/admin-diplay.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { NewUserListComponent } from './pages/new-user-list/new-user-list.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: "", component: AdminDiplayComponent,canActivate: [AuthGuard]
  },
  {
    path:"activeUser", component:UserListComponent
  },
  {
    path:"newRegister",component:NewUserListComponent
  },
  {
    path:"todoList",component:ToDoListComponent,canActivate: [AuthGuard]
  },
  {
     path:"uploadFile",component:DragDropComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class AdminRoutingModule { }
