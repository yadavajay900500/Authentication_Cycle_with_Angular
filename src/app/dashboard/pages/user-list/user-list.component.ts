import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';



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

export class UserListComponent implements OnInit {
  activate: boolean = true;
  result: any = []
  res: any = []
  update: any = ''

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.get_all_data()
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
    this.updateStatus(id, index)
  }

  get_all_data() {
    this.http.get(`http://localhost:5050/allApplication`).
      subscribe({
        next: (r: any) => {
           this.dataSource = r; 
          },
        error: (err: any) => {
           this.res = err;
           },
      })


  }

  updateStatus(id: any, index: any) {
    let data = { id: id}
    this.http.patch(`http://localhost:5050/updateStatus`, data).
      subscribe({
        next: (r: any) => { this.update = r; this.get_all_data() },
        error: (err: any) => { this.res = err; },
      })

  }

}


