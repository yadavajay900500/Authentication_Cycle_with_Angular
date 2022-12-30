import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AppService } from 'src/app/app.service';
import { ModalComponent } from '../../../component/modal/modal.component';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  newTask: any = ''
  items: String[] = []
  userEmail: any = []
  errs: any
  deleteResult: any
  updateResult: any
  updateNewTask: any
  modalRef: MdbModalRef<ModalComponent> | null = null;
  helper = new JwtHelperService();
  constructor(private modalService: MdbModalService, private adminService: AdminService,
  private http: HttpClient, private service: AppService,) {
  }

  ngOnInit(): void {

    this.getAllTasks()
  }



  deleteTask(index: any) {

    const token: any = sessionStorage.getItem('TOKEN');
    const tokenData = this.helper.decodeToken(token);
    const data: any = {
      email: tokenData.data.email,
      toDaData: index
    }

    this.adminService.toDoListRemove(data).subscribe({
      next: (r: any) => {
        this.deleteResult = r;
        this.getAllTasks()
      },
      error: (err: any) => {
        this.errs = err;
      }
    })

  }

  updateTask(index: any, info: any) {
    this.service.setData(info)
    this.modalRef = this.modalService.open(ModalComponent)

    this.modalRef.onClose.subscribe((message: any) => {
      this.updateNewTask = message

      if (message) {
        const token: any = sessionStorage.getItem('TOKEN');
        const tokenData = this.helper.decodeToken(token);

        const data = {
          email: tokenData.data.email,
          toDaData: this.updateNewTask,
          index: info
        }

        this.adminService.toDoListUpadate(data).subscribe({
          next: (r: any) => {
            this.updateResult = r; console.log(r); this.getAllTasks()

          },
          error: (err: any) => {
            this.errs = err; console.log(err)
          }
        })
      }
    })
  };

  addToList(body: any) {
    if (body == '') {
    }
    else {

      const token: any = sessionStorage.getItem('TOKEN');
      const tokenData = this.helper.decodeToken(token);
      const data: any = {

        email: tokenData.data.email,
        work: body
      }
      this.adminService.toDoListAdd(data).subscribe({
        next: (r: any) => {
          this.items = r;
          this.getAllTasks()
          this.newTask = ""

        },
        error: (err: any) => {
          this.errs = err;
        }
      })
    }
  }

  getAllTasks() {

    const token: any = sessionStorage.getItem('TOKEN');
    const tokenData = this.helper.decodeToken(token);
    const data = tokenData.data.email;

    this.adminService.getAllTasks(data).subscribe({
      next: (r: any) => {
        this.items = r;

      },
      error: (err: any) => {
        this.errs = err;
      }
    })
  }


}
