import { Component, OnInit } from '@angular/core';
import { AllqueryService } from '../services/allquery.service';
import { ChartGestionService } from '../services/chart-gestion.service';

@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.css']
})
export class SimpleChartComponent implements OnInit {

  chartData: any[] = [];
  chartLabel: any[] = [];

  constructor(private chart: ChartGestionService, private query: AllqueryService) {
  }

  ngOnInit(): void {
    this.callGetTurnover();
    // this.changeDate();
  }

  callGetTurnover(): void{
    this.query.getBuySellPerMonth("month").subscribe((data: any) => {
      console.log(data);
      data.group.forEach((element: any) => {
        this.chartData.push(element.count);
        this.chartLabel.push(element["_id"].year+"-"+element["_id"].month);
      });
      this.chart.createChart('bar_chart', this.chartLabel, this.chartData);
    });
  }
}
