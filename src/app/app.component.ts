import { Component, OnInit } from '@angular/core';
import { CITIES } from './weatherArray';
import { wheatherInterface } from './weatherInterface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  city?: wheatherInterface;
  cityValue: string = '';
  errors?: boolean;
  cold?: boolean;
  warm?: boolean;
  constructor() {}
  ngOnInit() {}
  check() {
    this.errors = false;
    this.cold = false;
    this.warm = false;
    this.city = CITIES.find((city) => city.cityName === this.cityValue);
    if (!this.city) {
      this.errors = true;
    } else {
      if (this.city.cityNowTemp > 0) {
        this.warm = true;
      } else {
        this.cold = true;
      }
    }
  }
}
