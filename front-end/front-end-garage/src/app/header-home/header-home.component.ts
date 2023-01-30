import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  logo: string = "assets/template-assets/img/logo.png";

  constructor() {}

  ngOnInit(): void {
  }

}
