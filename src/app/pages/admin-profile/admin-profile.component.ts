import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
rootServives;
  constructor() {
this.rootServives=AppService
    
  }

  ngOnInit(): void {

  }

}
