import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  s_no:number;
  name: string;
  email: string;
  market: string;
  role: string;
  status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {s_no: 1, name: 'Hydrogen', email:"abc@gmail.com", market: 'USA',role:"emp",status:"active"},
  {s_no: 2, name: 'Helium', email: "abc@gmail.com", market: 'INDIA',role:"emp",status:"active"},
  {s_no: 3, name: 'Lithium', email: "abc@gmail.com", market: 'AUS',role:"emp",status:"active"},
  {s_no: 4, name: 'Beryllium', email: "abc@gmail.com", market: 'ENG',role:"emp",status:"active"},
  {s_no: 5, name: 'Boron', email: "abc@gmail.com", market: 'B',role:"emp",status:"disable"},
  {s_no: 6, name: 'Carbon', email: "abc@gmail.com", market: 'C',role:"emp",status:"active"},
  {s_no: 7, name: 'Nitrogen', email: "abc@gmail.com", market: 'N',role:"emp",status:"active"},
  {s_no: 8, name: 'Oxygen', email: "abc@gmail.com", market: 'O',role:"emp",status:"active"},
  {s_no: 9, name: 'Fluorine', email: "abc@gmail.com", market: 'F',role:"emp",status:"active"},
  {s_no: 10, name: 'Neon', email: "abc@gmail.com", market: 'Ne',role:"emp",status:"active"},
 
];
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  activate:boolean = true;
  ngOnInit(): void {
  
  }
  displayedColumns: string[] = ['s_no', 'name', 'email', 'market','role','status'];
  dataSource = ELEMENT_DATA;


  buttonToggle(e:any,id:any,status:any){
    console.log("event clicked",e)
    console.log("second thing",id)
    
    if(status == "active"){
       ELEMENT_DATA[id].status = "disable"
       console.log("status",ELEMENT_DATA[id].status)
    }
    else{
      ELEMENT_DATA[id].status = "active"
      console.log(ELEMENT_DATA)
    }
    this.activate = !this.activate;
  }

}


// 888888888888888888888888888888888



