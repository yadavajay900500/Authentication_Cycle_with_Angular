import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.scss']
})


export class NewUserListComponent implements OnInit {

  email: any
  newApplication: any;
  id: any;
  body: any;
  constructor(
    private adminService: AdminService

  ) {

  }
  ngOnInit(): void {
    this.userData()
  }

  userData(){
    this.adminService.allNewUser()
      .subscribe({
        next: (res: any) => {
          console.log("Successfull Add Data !", res.data)
          this.newApplication = res.data
          this.id = this.newApplication._id
        },
        error: (e) => {
          console.log("Something Wrong !", e)
        }
      })
  }

  
  accountApproves(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Approved",
        statusBy: "Ajay Yadav",
      }
    }
    console.log(data)
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log(r)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  accountPendding(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Pending",
        statusBy: "Ajay Yadav",
      }
    }
    console.log(data)
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log(r)

      },
      error: (err) => {
        console.log(err)
      }
    })

  }
  accountRejected(body: any) {
    const data = {
      _id: body,
      action: {
        role: "admin",
        status: "Rejected",
        statusBy: "Ajay Yadav",
      }
    }
    console.log(data)
    this.adminService.accountApproved(data).subscribe({
      next: (r: any) => {
        console.log(r)

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
