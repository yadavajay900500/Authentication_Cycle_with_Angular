import { Component, OnInit } from '@angular/core';
import { SignInSignUpService } from 'src/app/_services/sign-in-sign-up.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  highcharts:any=[]
  cards:any = [];

  constructor(private signInsignUpService:SignInSignUpService ) { }

  ngOnInit(): void {
    this.highcharts=this.signInsignUpService.highcharts()
    this.cards = this.signInsignUpService.pieChart();

  }

}
