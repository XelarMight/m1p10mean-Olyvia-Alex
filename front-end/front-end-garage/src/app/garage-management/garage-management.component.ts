import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage-management',
  templateUrl: './garage-management.component.html',
  styleUrls: ['./garage-management.component.css']
})
export class GarageManagementComponent implements OnInit {

  nbPlace: number = 5;
  myData: number[] = [];
  percentageDone: number = 65;
  totalCost: number = 165000;

  constructor() {
    this.genArray(this.nbPlace);
  }

  ngOnInit(): void {
  }

  genArray(nb: number) :void {
    for(let i: number=0; i < nb;i++){
      this.myData.push(i);
    }
  }
}
