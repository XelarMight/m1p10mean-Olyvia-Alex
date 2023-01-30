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
}
