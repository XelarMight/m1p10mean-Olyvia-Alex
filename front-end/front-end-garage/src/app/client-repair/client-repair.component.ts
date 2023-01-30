import { Component, OnInit } from '@angular/core';
import { AllqueryService } from '../services/allquery.service';

@Component({
  selector: 'app-client-repair',
  templateUrl: './client-repair.component.html',
  styleUrls: ['./client-repair.component.css']
})
export class ClientRepairComponent implements OnInit {

  carInfo: any;
  allRepairList: any[] = [];
  totalPercent: number = 0;

  constructor(private query: AllqueryService){

  }

  ngOnInit(): void {
    this.selectAllRepair();
  }

  selectAllRepair(): void{
    this.query.getAllRepairAndAdvancement('Jonathan', 'joe@example.com', '63d7c2d5d934125ff22a50fc')
    .subscribe((data: any) => {
      console.log(data);
      let tempPercent = 0;
      this.carInfo = data.car;
      data.result.forEach((element: any) => {
        this.allRepairList.push(element);
        tempPercent += element.advancement;
      });
      this.totalPercent = tempPercent/3;
    });
  }

}
