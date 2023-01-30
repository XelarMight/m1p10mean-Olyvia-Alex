import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AllqueryService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000";

  getUrlBase(){
    return this.baseUrl;
  }

  getAllRepairAndAdvancement(username: string, email: string, carId: string){
    //return this.http.get(this.baseUrl+"/repairs_and_advancement?firstname="+username+"&email="+email+"&carId="+carId);
    return this.http.get(this.baseUrl+"/repairs_and_advancement/"+carId);
  }

  getAllRepairHisto(username: string, email: string, carId: string){
    //return this.http.get(this.baseUrl+"/repairs_and_advancement?firstname="+username+"&email="+email+"&carId="+carId);
    return this.http.get(this.baseUrl+"/repairs_and_advancement/"+carId);
  }

  getCarToGarage(){
    return this.http.get(this.baseUrl+"/car-to-garage");
  }

  updateCarOngoing(listOfCars: any[]){
    const body = { "carUp": listOfCars };
    return this.http.post(this.baseUrl+"/car-to-garage", body, {headers : new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'})});
  }

  getAverageTimeRepair(){
    return this.http.get(this.baseUrl+"/average-repair-time");
  }

  getBuySellPerMonth(dayOrMonth: string){
    return this.http.get(this.baseUrl+"/turnover/"+dayOrMonth);
  }

  getProfits(profits: any, salary: any, rent: any,
        purchase: any, expense: any){
    return this.http.get(this.baseUrl+"/profit/"+salary+"/"+rent+"/"+purchase+"/"+expense);
  }
}
