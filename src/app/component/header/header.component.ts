import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue:any = null;
  constructor() { }
  title:any={logo:"doceree",home:"Home",signin:"Signin",signup:"Signup"};
  ngOnInit(): void {
  }


  onSubmit(event:any){

  }
}
