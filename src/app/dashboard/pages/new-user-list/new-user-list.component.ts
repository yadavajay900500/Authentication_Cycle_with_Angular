import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.scss']
})
export class NewUserListComponent implements OnInit {
  email:any
  newApplication: any;
  id: any;
  body:any;
  constructor( 
    private signInService: SignInSignUpService

    ) { }
  ngOnInit(): void {
    this.signInService.allNewUser()
    .subscribe({
      next: (res: any) => {
        console.log("Successfull Add Data !", res.data)
        // const newResult=res.reverse()
        this.newApplication= res.data
        this.id=this.newApplication._id
      },
      error: (e) => {
        console.log("Something Wrong !", e)
      }
    })
  }

 

}
