import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';



export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

export interface PeriodicElement {
  s_no: number;
  name: string;
  email: string;
  MARKET: string;
  // market: string;
  role: string;
  status: string
}


interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
// export class UserListComponent implements OnInit {

//   activate:boolean = true;
//   ngOnInit(): void {

//   }
//   displayedColumns: string[] = ['s_no', 'name', 'email', 'market','role','status'];
//   dataSource = ELEMENT_DATA;


//   buttonToggle(e:any,id:any,status:any){
//     console.log("event clicked",e)
//     console.log("second thing",id)

//     if(status == "active"){
//        ELEMENT_DATA[id].status = "disable"
//        console.log("status",ELEMENT_DATA[id].status)
//     }
//     else{
//       ELEMENT_DATA[id].status = "active"
//       console.log(ELEMENT_DATA)
//     }
//     this.activate = !this.activate;
//   }

// }


// 888888888888888888888888888888888











export class UserListComponent implements OnInit {
  activate: boolean = true;
  result: any = []
  res: any = []
  update: any = ''

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    this.get_all_data()
    // this.http.post(`http://localhost:8000/get_user_list`,).
    // subscribe({
    //   next: (r:any) => {this.result = r;console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",this.result ,this.router.navigateByUrl("/"))},
    //   error: (err:any) => { this.res = err;   },
    //   })
  }

  roleGropus: PokemonGroup[] = [
    {
      name: 'Advert',
      pokemon: [
        { value: 'A', viewValue: 'A' },
        { value: 'B', viewValue: 'B' },
        { value: 'C', viewValue: 'C' },
      ],
    },
    {
      name: 'Publisher',
      pokemon: [
        { value: 'D', viewValue: 'D' },
        { value: 'E', viewValue: 'E' },
        { value: 'F', viewValue: 'F' },
      ],
    },
  ];


  displayedColumns: string[] = ['s_no', 'name', 'email','MARKET',  'role', 'status'];
  dataSource = [];


  buttonToggle(e: any, id: any, status: any, index: any) {
    console.log("event clicked", index)

    this.updateStatus(id, index)

  }

  get_all_data() {
    this.http.get(`http://localhost:5050/allApplication`).
      subscribe({
        next: (r: any) => { this.dataSource = r; console.log("111111!!!!!!!!!!!!!!!!!!!!!!!!!!") },
        error: (err: any) => { this.res = err; },
      })


  }

  updateStatus(id: any, index: any) {
    // console.log(id)
    let data = {
      id: id
    }
    // const info = this.dataSource[index] 
    // console.log( info.status  )
    this.http.patch(`http://localhost:5050/updateStatus`, data).
      subscribe({
        next: (r: any) => { this.update = r; console.log("!!!", this.update), this.get_all_data() },
        error: (err: any) => { this.res = err; },
      })

  }
  // ***********checkBox*******************//

  

  // task: Task = {
  //   name: 'Select_All',
  //   completed: false,
  //   color: 'primary',
  //   subtasks: [
  //     { name: 'India', completed: false, color: 'primary' },
  //     { name: 'UK', completed: false, color: 'accent' },
  //     { name: 'US', completed: false, color: 'warn' },
  //     { name: 'France', completed: false, color: 'warn' },
  //     { name: 'Africa', completed: false, color: 'warn' },
  //   ],
  // };

  // allComplete: boolean = false;

  // updateAllComplete() {
  //   this.allComplete = this.task.subtasks != null && this.task.subtasks
  //     .every((t) => {
  //       console.log(":::::::::::::::::::::::", t)
  //       t.completed
  //     });
  // }

  // someComplete(): boolean {
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }
  //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  // }
  //  allSelect:Array<string> = []
  //  all:Array<string> = []

  // setAll(completed: boolean) {
  //   console.log("AALLLLALAL", completed)
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach((t) => {
  //     console.log(">>>>>>>??????",t.completed, t.name)
  //     if ( !t.completed ) {
  //       this.allSelect.push(t.name)
  //     } else{
  //       this.allSelect.pop()
  //     }
  //     t.completed = completed
  //   });
  //   console.log("++++++++++++",this.allSelect)
  // }

  // onChangeEvent(event: MatCheckboxChange) {
  //   // console.log("bbbooooooooooooooooooooobob",event.source.checked)
  //   if(this.allSelect.length >=0){
  //     console.log(event.source.value)
  //     if(!this.allSelect.includes(event.source.value)){
  //       this.allSelect.push(event.source.value)
  //     }else{
  //      const arr=this.allSelect.filter(function(item) {
  //         return item !== event.source.value
  //     })
  //     this.allSelect=arr
  //     }
  //   }
    
  //   console.log("bbbooooooooooooooooooooobob", this.allSelect)
  // }

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage'];
  // selected = -1;

  // /*checkbox change event*/
  // onChange(event:any) {
  //   console.log(event)
  // }

  // toppings = new FormControl('');
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  // selectAllChange(event: any) {
  //   if (event.checked) {
  //     this.tasks = this.tasks.map((task:any)=>{
  //       task.completed = true;
  //       return task
  //      })

  //   }
  //   else {

  //     this.tasks = this.tasks.map((task)=>{
  //       task.completed = false;
  //       return task
  //      })
  //   }
  //   console.log(event.checked)
  // }

  // taskChanged(event:any){
  //    if(this.tasks.every((task)=>{task.completed === true}))
  //    {
  //     this.indeterminent = false;
  //     this.checkSelectAll = true;
  //   }
  //    else{ 
  //     if(this.tasks.filter((task)=>task.completed).length > 0){
  //       this.indeterminent = true;
  //     }
  //     else{
  //       this.indeterminent = false;
  //     }

  //     this.checkSelectAll = false;
  //   }
  // }


  // changecheck(event:any){
  //  console.log(event)
  //   if(this.numeoCheckbox % 2 != 0){
  //    this.numeoCheckbox = this.numeoCheckbox + 1;
  //    this.contr = event
  //   }
  //   else{
  //       this.contr = "";
  //       this.numeoCheckbox = this.numeoCheckbox + 1;
  //   }
  // }

  // changepropertyType(event:any){

  //  if(this.numeoCheck % 2 != 0){
  //    this.numeoCheck = this.numeoCheck + 1;
  //    this.cont = event
  //   }
  //   else{
  //       this.cont = "";
  //       this.numeoCheck = this.numeoCheck + 1;
  //   }
  // }


}


