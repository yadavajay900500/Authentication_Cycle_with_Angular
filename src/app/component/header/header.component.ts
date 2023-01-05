import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue:any = null;
  constructor(private _signInSignUpService:SignInSignUpService) { }
  title:any={logo:"doceree",home:"Home",signin:"Signin",signup:"Signup"};
  // logo:string='doceree'
  ngOnInit(): void {
    // this.logo=this._signInSignUpService.logo
  }


  onSubmit(event:any){

  }
}
