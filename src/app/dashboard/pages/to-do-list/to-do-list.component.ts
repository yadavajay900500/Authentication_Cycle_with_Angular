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
  items:String[] = []
  userEmail:any = []
  errs:any 
  deleteResult:any
  updateResult:any
  updateNewTask:any
  modalRef: MdbModalRef<ModalComponent> | null = null;
  helper = new JwtHelperService();
  constructor(private modalService: MdbModalService,private adminService:AdminService,private http:HttpClient,private service:AppService) { 
  }

  ngOnInit(): void {
   
   this.getAllTasks()
  }
  deleteTask(index: any) {
    console.log(index)
    const token: any = sessionStorage.getItem('TOKEN');
    const tokenData = this.helper.decodeToken(token);
    const data :any = {
      
      email:tokenData.data.email,
      toDaData:index
      
    } 
    console.log("line 54",data.email)
    this.http.post(`http://localhost:5050/remove`,data).subscribe({
      next:(r:any) =>{
        this.deleteResult = r;console.log("remove res",r)
        this.getAllTasks()

      },
      error:(err:any)=>{
        this.errs = err;console.log("eeeeeeeeeeeeeeeeeeeee",err)
      }
    })
  }

  updateTask(index: any,info:any) {
    let count = 0
    console.log("index",count++)
    this.service.setData(info)
    // this.items.replace(index, 1);
    this.modalRef = this.modalService.open(ModalComponent)

    this.modalRef.onClose.subscribe((message: any) => {
      console.log("wertyui", message);
      this.updateNewTask = message
      if(message){
      const token: any = sessionStorage.getItem('TOKEN');
      const tokenData = this.helper.decodeToken(token);
      
      const data = {
        email:tokenData.data.email,
        toDaData:this.updateNewTask,
        index:info
       }
       console.log("jjjjjjjjjjjjjjjjjjjjj",this.updateNewTask,info)
    
       this.http.patch('http://localhost:5050/update',data).subscribe({
        next:(r:any) =>{
          this.updateResult = r;console.log(r);this.getAllTasks()
  
        },
        error:(err:any)=>{
          this.errs = err;console.log(err)
        }
      })
    }
    });
    
   
  

  }

  addToList(body:any) {
    if (body == '') {
    }
    else {

      const token: any = sessionStorage.getItem('TOKEN');
      const tokenData = this.helper.decodeToken(token);
      const data :any = {
        
        email:tokenData.data.email,
        work:body
      } 
      console.log("line 54",data.email)
      this.http.post(`http://localhost:5050/add`,data).subscribe({
        next:(r:any) =>{
          this.items = r;console.log(r)
          this.getAllTasks()
          this.newTask = ""
  
        },
        error:(err:any)=>{
          this.errs = err;console.log("eeeeeeeeeeeeeeeeeeeee",err)
        }
      })
    }
  }

  getAllTasks(){

    const token: any = sessionStorage.getItem('TOKEN');
    const tokenData = this.helper.decodeToken(token);
    const data = tokenData.data.email;
    this.http.get(`http://localhost:5050/getTask?email=${data}`).subscribe({
      next:(r:any) =>{
        this.items = r;console.log("zara batao to",this.items)

      },
      error:(err:any)=>{
        this.errs = err;console.log(err)
      }
    })
  }
  

}
