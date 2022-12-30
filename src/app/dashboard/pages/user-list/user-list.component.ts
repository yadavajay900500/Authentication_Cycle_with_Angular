import { Component, OnInit } from '@angular/core';

import { RolesGroup } from 'src/app/data.type';
import { AdminService } from '../../admin.service';


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

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {

    this.get_all_data()

  }

  roleGropus: RolesGroup[] = [
    {
      name: 'Advert',
      roles: [
        { value: 'A', viewValue: 'A' },
        { value: 'B', viewValue: 'B' },
        { value: 'C', viewValue: 'C' },
      ],
    },
    {
      name: 'Publisher',
      roles: [
        { value: 'D', viewValue: 'D' },
        { value: 'E', viewValue: 'E' },
        { value: 'F', viewValue: 'F' },
      ],
    },
  ];


  displayedColumns: string[] = ['s_no', 'name', 'email', 'MARKET', 'role', 'status'];
  dataSource: any = [];


  buttonToggle(e: any, id: any, status: any, index: any) {
    console.log("event clicked", index)

    this.updateStatus(id, index)

  }

  get_all_data() {
    this.adminService.getUserList().
      subscribe({
        next: (r:any) => { this.dataSource = r as string },
        error: (err: any) => { this.res = err; },
      })


  }

  updateStatus(id: any, index: any) {
    let data = {
      id: id
    }
    this.adminService.updateToUserList(data).subscribe({
      next: (r: any) => { this.update = r; this.get_all_data() },
      error: (err: any) => { this.res = err; },
    })

  }


}


