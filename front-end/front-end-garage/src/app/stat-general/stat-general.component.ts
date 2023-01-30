import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-general',
  templateUrl: './stat-general.component.html',
  styleUrls: ['./stat-general.component.css']
})
export class StatGeneralComponent implements OnInit {

  chartData = [10, 22, 33, 44, 55];
  chartLabel = ['hey', 'hey1', 'hey2', 'hey3', 'hey4'];

  constructor(private chart: ChartGestionService) {
  }

  ngOnInit(): void {
    this.chart.createChart('bar_chart', this.chartLabel, this.chartData);
    // this.changeDate();
  }
}
