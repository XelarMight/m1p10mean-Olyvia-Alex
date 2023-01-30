import { Component, OnInit } from '@angular/core';
import { AllqueryService } from '../services/allquery.service';

@Component({
  selector: 'app-client-histo',
  templateUrl: './client-histo.component.html',
  styleUrls: ['./client-histo.component.css']
})

export class ClientHistoComponent implements OnInit {

  allRepairList: any = [];

  constructor(private query: AllqueryService){

  }

  ngOnInit(): void {
    //this.selectAllRepair();
  }

  selectAllRepair(): void{
    this.query.getAllRepairHisto('Jonathan', 'joe@example.com', '63d761dbd934125ff21bd3af')
    .subscribe((data: any) => {
      console.log(data);
      data.result.forEach((element: any) => {
        this.allRepairList.push(element);
      });
    });
  }
}
