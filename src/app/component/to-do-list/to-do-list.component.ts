import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  newTask: any = ''

  items: any = []
  modalRef: MdbModalRef<ModalComponent> | null = null;
  private signInService!: SignInSignUpService;
  constructor(private modalService: MdbModalService,) { }

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

  addToList() {
    console.log(this.newTask)
    if (this.newTask == '') {
    }
    else {
      // this.signInService.toDoListAdd(this.newTask)
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  

}
