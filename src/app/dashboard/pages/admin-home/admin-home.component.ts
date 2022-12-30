import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  observer: any;
  BASEURL: string;
  rootService;
  helper = new JwtHelperService();

  constructor(private rootservice: AppService, private http: HttpClient) {
    this.rootService = AppService
    this.BASEURL = AppService.BASEURL
  }
  ngOnInit(): void {
    const token: any = sessionStorage.getItem('TOKEN');
    const tokenData = this.helper.decodeToken(token);
    var data=tokenData.data


    this.adminData(data)
    console.log("tokenData",tokenData)
     const adminData= this.rootservice.getData().subscribe(translatedValue => { 
      const adminData=translatedValue
    });

  }
 adminDetails:any
  adminData(body: any) {
     this.http.post(`${this.BASEURL}adminData`, body).subscribe({
      next: (r: any) => {
        this.adminDetails = r
      },
      error: (err) => {
      }
    })
  }




}
