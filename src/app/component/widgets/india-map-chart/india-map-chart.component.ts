import { Component, OnInit } from '@angular/core';
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import proj4 from "proj4";
import { HttpClient } from '@angular/common/http';
// import { MapChart } from 'angular-highcharts';
import indiaMap from '../indiaMap';
@Component({
  selector: 'app-india-map-chart',
  templateUrl: './india-map-chart.component.html',
  styleUrls: ['./india-map-chart.component.scss']
})
export class IndiaMapChartComponent implements OnInit {

  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false;
  topology!: string | object | any[] | undefined;
  

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
    this.getTopologyIndiaData().subscribe({
      next: (r) => {
        console.log("?????????", r)
        this.topology = r
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  data= [
    ['in-py', 0],
    ['in-ld', 1],
    ['in-wb', 2],
    ['in-or', 3],
    ['in-br', 4],
    ['in-sk', 5],
    ['in-ct', 6],
    ['in-tn', 7],
    ['in-mp', 8],
    ['in-2984', 9],
    ['in-ga', 10],
    ['in-nl', 11],
    ['in-mn', 12],
    ['in-ar', 13],
    ['in-mz', 14],
    ['in-tr', 15],
    ['in-3464', 16],
    ['in-dl', 17],
    ['in-hr', 18],
    ['in-ch', 19],
    ['in-hp', 20],
    ['in-jk', 21],
    ['in-kl', 22],
    ['in-ka', 23],
    ['in-dn', 24],
    ['in-mh', 25],
    ['in-as', 26],
    ['in-ap', 27],
    ['in-ml', 28],
    ['in-pb', 29],
    ['in-rj', 30],
    ['in-up', 31],
    ['in-ut', 32],
    ['in-jh', 33]
  ];


  getTopologyIndiaData() {
    return this.http.get('https://code.highcharts.com/mapdata/countries/in/in-all.topo.json')
  }


  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
 

  chartOptions: Highcharts.Options = {

    chart: {
      // map: this.topology
      map:indiaMap,

    },

    title: {
      text: 'Highcharts Maps basic demo'
    },

    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/in-all.topo.json">India</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    colorAxis: {
      min: 0
    },
    series: [{
      type:"map",
      // type:"mapline",

      data: [
        ['in-py', 0],
        ['in-ld', 1],
        ['in-wb', 2],
        ['in-or', 3],
        ['in-br', 4],
        ['in-sk', 5],
        ['in-ct', 6],
        ['in-tn', 7],
        ['in-mp', 8],
        ['in-2984', 9],
        ['in-ga', 10],
        ['in-nl', 11],
        ['in-mn', 12],
        ['in-ar', 13],
        ['in-mz', 14],
        ['in-tr', 15],
        ['in-3464', 16],
        ['in-dl', 17],
        ['in-hr', 18],
        ['in-ch', 19],
        ['in-hp', 20],
        ['in-jk', 21],
        ['in-kl', 22],
        ['in-ka', 23],
        ['in-dn', 24],
        ['in-mh', 25],
        ['in-as', 26],
        ['in-ap', 27],
        ['in-ml', 28],
        ['in-pb', 29],
        ['in-rj', 30],
        ['in-up', 31],
        ['in-ut', 32],
        ['in-jh', 33]
      ],
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  }
}
