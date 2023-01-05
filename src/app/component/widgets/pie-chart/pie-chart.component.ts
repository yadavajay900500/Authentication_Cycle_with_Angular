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
    console.log("+++++++=====", this.data)
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: this.data.chart.type,
      },
      title: {
        text: this.data.title.text,
      },
      subtitle: {
        text: this.data.subtitle.text
      },
      xAxis: {
        allowDecimals: false,
        title: {
          text: this.data.xAxis.title.text
        },
        labels: {
          formatter: function () {
            let result = this
            type Object = keyof typeof result;
            const val = 'value' as Object
            return result[val];
          }
        },
        accessibility: {
          rangeDescription: this.data.accessibility.rangeDescription
        }
      },
      yAxis: {
        title: {
          text:this.data.yAxis.title.text
        },
        labels: {
          formatter: function () {
            const result = this;
            type Object = keyof typeof result;
            const val = 'value' as Object
            return result[val];
          }
        }
      },
      tooltip: {
        pointFormat: this.data.tooltip.pointFormat
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
      accessibility: {
        description: '',
        point: {
          valueSuffix: this.data.accessibility.point.valueSuffix,
        },
    },
      // plotOptions: {
      //   pie: {
      //     allowPointSelect: true,
      //     cursor: "pointer",
      //     dataLabels: {
      //       enabled: true,
      //       format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      //     },
      //   },
      // },
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: this.data.series[0].name,
          colorByPoint: true,
          data: this.data.series[0].data
        },
      ],
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      dispatchEvent(new Event("resize"));
    }, 300);
  }
}
