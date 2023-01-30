import { Component, OnInit } from '@angular/core';
import { AllqueryService } from '../services/allquery.service';

@Component({
  selector: 'app-client-histo',
  templateUrl: './client-histo.component.html',
  styleUrls: ['./client-histo.component.css']
})

export class ClientHistoComponent implements OnInit {

  allRepairList = [];

  constructor(private query: AllqueryService){

  }

  ngOnInit(): void {
    //this.selectAllRepair();
  }

  selectAllRepair(): void{
    this.query.getAllRepairAndAdvancement('Jonathan', 'joe@example.com', '63d761dbd934125ff21bd3af')
    .subscribe(data => {
      console.log(data);
    });
  }
}
