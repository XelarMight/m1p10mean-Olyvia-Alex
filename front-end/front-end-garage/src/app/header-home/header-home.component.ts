import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  mainLink: string = "localhost:4200/";
  
  constructor() {}

  ngOnInit(): void {
  }

}
