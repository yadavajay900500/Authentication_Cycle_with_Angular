import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../../../component/modal/modal.component';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  newTask: any = ''
  items: any = []
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private modalService: MdbModalService,private adminService:AdminService) { 
  }

  ngOnInit(): void {
  }
  deleteTask(index: any) {
    this.items.splice(index, 1);
  }

  updateTask(index: any) {
    console.log("index", index)
    // this.items.replace(index, 1);
    this.modalRef = this.modalService.open(ModalComponent)

    this.modalRef.onClose.subscribe((message: any) => {
      console.log("wertyui", message);
    });
  }

  addToList(body:any) {
    if (body == '') {
    }
    else {
      const dotoWork:object={work:body}
      console.log("~~~~~~~~~~~~~~~~~~",dotoWork)

      this.adminService.toDoListAdd(dotoWork)
      this.items.push(this.newTask);
      // this.newTask = '';
    }
  }

  

}
