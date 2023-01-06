import { Component, OnInit, Input, Output } from '@angular/core';
import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data: any;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: this.data.chart,
      title: this.data.title || null,
      subtitle:this.data.subtitle,
      xAxis: this.data.xAxis || null,
      yAxis: this.data.yAxis || null,
      tooltip: this.data.tooltip || null,
      plotOptions:this.data.plotOptions,
      accessibility: this.data.accessibility,
      exporting: this.data.exporting,
      credits:this.data.credits,
      series:this.data.series || null
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      dispatchEvent(new Event("resize"));
    }, 300);
  }
}
