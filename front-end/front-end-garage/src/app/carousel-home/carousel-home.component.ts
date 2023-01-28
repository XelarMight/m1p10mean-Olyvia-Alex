import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {
  img1: string = "assets/template-assets/img/carousel-1.jpg";
  img2: string = "assets/template-assets/img/carousel-2.jpg";
  img3: string = "assets/template-assets/img/carousel-3.jpg";

  constructor() {}

  ngOnInit(): void {
  }

}
