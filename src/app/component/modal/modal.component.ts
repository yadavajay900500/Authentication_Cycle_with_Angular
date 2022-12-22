import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  value : any = ""
  constructor(public modalRef: MdbModalRef<ModalComponent>,private service:AppService) {}

  ngOnInit(): void {
    this.service.getData().subscribe({next:(r:any)=>{this.value = r ;console.log(r)}})
  }

 close(){
  const closeMessage = 'Modal closed';
  this.modalRef.close(closeMessage)
 }

 update(){
  const closeMessage = 'Modal closed';
  this.modalRef.close(this.value)
 }


}


