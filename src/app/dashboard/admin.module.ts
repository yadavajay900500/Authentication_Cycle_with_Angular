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
import { UserWorkListComponent } from './pages/user-work-list/user-work-list.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownCheckboxComponent } from './component/dropdown-checkbox/dropdown-checkbox.component';
import { DragDropComponent } from './component/drag-drop/drag-drop.component';



@NgModule({
    declarations: [
        AdminHomeComponent,
        UserListComponent,
        AdminHeaderComponent,
        AdminSidebarComponent,
        AdminDiplayComponent,
        NewUserListComponent,
        ToDoListComponent,
        UserWorkListComponent,
        DropdownCheckboxComponent,
        DragDropComponent
        
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule { }
