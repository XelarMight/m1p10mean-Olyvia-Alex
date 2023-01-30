import { Component, OnInit } from '@angular/core';
import { AllqueryService } from '../services/allquery.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-car-to-garage',
  templateUrl: './car-to-garage.component.html',
  styleUrls: ['./car-to-garage.component.css']
})
export class CarToGarageComponent implements OnInit {

  capacity: number = 5;

  todo: any[] = [];

  done: any[] = [];

  constructor(private query: AllqueryService){

  }

  ngOnInit() :void{
    this.getAllCarManagement();
  }

  getAllCarManagement() :void{
    this.query.getCarToGarage().subscribe((data: any) => {
      console.log(data);
      data.waiting.forEach((element: any) => {
        this.todo.push(element);
      });
      data.ongoing.forEach((element: any) => {
        this.done.push(element);
      });
    });
  }

  confirmManagement(): void{
    this.query.updateCarOngoing(this.done)
    .subscribe(
        val => {
            console.log("PUT call successful value returned in body",
                        val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }

  //
  drop(event: CdkDragDrop<string[]>) {
      if(this.capacity > this.done.length+1){
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
        }
      }
    }
  //
}
