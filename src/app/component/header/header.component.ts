import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title:any={logo:"doceree",home:"Home",signin:"Signin",signup:"Signup"};
  ngOnInit(): void {
  }

}
