import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';
import { AdminDiplayComponent } from './pages/admin-diplay/admin-diplay.component';
import { NewUserListComponent } from './pages/new-user-list/new-user-list.component';
import { MaterialModule } from '../materialModule/material/material.module';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UserListComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDiplayComponent,
    NewUserListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,

  ]
})
export class AdminModule { }
