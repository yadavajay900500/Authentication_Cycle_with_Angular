import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/materialModule/material/material.module';
import { DropdownCheckboxComponent } from 'src/app/dashboard/component/dropdown-checkbox/dropdown-checkbox.component';
import { FormsModule } from '@angular/forms';
import { FileDragNDropDirective } from 'src/app/file-drag-drop-directive';
import { DragDropComponent } from 'src/app/dashboard/component/drag-drop/drag-drop.component';


const sharedComponent=[
  DropdownCheckboxComponent,
    FileDragNDropDirective,
    DragDropComponent,
]

@NgModule({
  declarations: [
    sharedComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    sharedComponent
  ]
})
export class SharedModuleModule { }
