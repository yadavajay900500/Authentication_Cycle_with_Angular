import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
  // providers:[SignInSignUpService]
})
export class AdminHeaderComponent implements OnInit {
  @Input()item:any;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
      window.sessionStorage.clear();
  }

}
