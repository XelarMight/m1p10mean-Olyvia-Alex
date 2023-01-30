import { Injectable } from '@angular/core';

import { Chart, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartGestionService {

  barChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  createChart(chartId: string, label: any, data: any) {
    const barCanvasEle: any = document.getElementById(chartId)
    this.barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: label,
          datasets: [{
            label: '',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
  }

  clearChart(){
    // this.barChart.clear();
    this.barChart.destroy();
  }

  createLineChart(idCanvas: string, label: any, data: any){
    const barCanvasEle: any = document.getElementById(idCanvas)
    this.barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'line',
        data: {
          labels: label,
          datasets: [{
            label: 'Evolution',
            data: data,
            fill: false,
            borderWidth: 1,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
  }
}
