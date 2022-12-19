import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
 
  value : any = ""
  constructor(public modalRef: MdbModalRef<ModalComponent>) {}

  ngOnInit(): void {
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


