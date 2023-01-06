import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Injectable({
  providedIn: 'root'
})
export class SignInSignUpService {
  // logo = "doceree"
  rootservice: any
  BASEURL: string;
  constructor(private http: HttpClient, private router: Router,
  ) {
    this.rootservice = AppService
    this.BASEURL = AppService.BASEURL
  }

  userSignUp(body: any) {
    return this.http.post(`${this.BASEURL}signUp`, body)
  }

  userSignIn(body: any) {
    return this.http.post(`${this.BASEURL}signIn`, body)
  }
  GenerateRefreshToken() {
    let input = {
      "jwtToken": this.rootservice.getToken('TOKEN'),
      "refreshToken": this.rootservice.getRefrshToken('REFRESH_TOKEN')
    }
    this.rootservice.logout();
    return this.http.post(`${this.BASEURL}signIn` + 'refresh', input);
  }

  piechartData(){
    return this.http.get(``)
  }
  // =================================================

  highcharts(){

     let options = {
      chart: {
         type: 'area'
      },
      accessibility: {
          description: '',
          point: {
            valueSuffix: "%",
          },
      },
      title: {
          text: 'US and Russia nuclear stockpiles'
      },
      subtitle: {
          text: 'Sources: Dummy data'
      },
      xAxis: {
          allowDecimals: false,
          title: {
            text: 'cold War'
        },
          labels: {
              formatter: function () {
                let result=this
                type Object=  keyof typeof result;
                const val='value' as Object
                return result[val];
              }
          },
          accessibility: {
              rangeDescription: 'Range: 1940 to 2018.',
              
          }
      },
      
      yAxis: {
          title: {
              text: 'Nuclear weapon states'
          },
          labels: {
              formatter: function () {
                 const result=this;
                 type Object=keyof typeof result;
                 const val='value' as Object
                 return result[val];
              }
          }
      },
      tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'USA',
          data: [
              null, null, null, null, null, 6, 11, 32, 110, 235,
              369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
              20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
              26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
              24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
              21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
              10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
              5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018,4025
          ]
      },
       {
          name: 'Russia',
          data: [null, null, null, null, null, null, null, null, null, null,
              5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
              1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
              11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
              30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
              37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
              21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
              12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500,4100
          ]
      },
      {
        name: 'India',
        data: [
            5, 25, 50, 120, 150, 207, 426, 660, 869, 1060,
            1600, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            
        ]
    }
    ]
    }

    return options
  }
 
  pieChart() {
   
    let options  = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "BROWSERS: MARKET SHARE",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: "Internet Explorer",
              y: 11.84,
            },
            {
              name: "Firefox",
              y: 10.85,
            },
            {
              name: "Edge",
              y: 4.67,
            },
            {
              name: "Safari",
              y: 4.18,
            },
            {
              name: "Sogou Explorer",
              y: 1.64,
            },
            {
              name: "Opera",
              y: 1.6,
            },
            {
              name: "QQ",
              y: 1.2,
            },
            {
              name: "Other",
              y: 2.61,
            },
          ],
        },
      ],
    };
    

    return options;
  }
}

