import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { NavController } from '@ionic/angular';
//import { SettingsPage } from '../settings/settings.page';
//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  template: `
  <img 
  src="https://maps.googleapis.com/maps/api/staticmap?center={{city}}&zoom=5&size=200x200&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus" />
  <h3>
    <img [src]="weatherIconURL + data?.weather[0].icon +'.png'">
    {{data?.weather[0].description}} / {{data?.main.temp}}°
  </h3>

  <pre>{{data?.coord.lat}} {{data?.coord.lon}}°</pre> 
  <pre>data:\n{{data | json}}</pre> 
  `,
  //data[0] is start parsing json as array: Object[]
})
export class HomePage implements OnInit {
  @Input() city: string;
  data: any;

  weatherIconURL = 'https://openweathermap.org/img/w/';
  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherParams = '&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534';

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    const { city } = changes;
    this.fetchData(city.currentValue);
  }

  ngOnInit() {}

  fetchData(text = '') {
    const url = `${this.weatherAPI}${text}${this.weatherParams}`;

    this.http.get(url).subscribe((res) => {
      this.data; // .json() not working with HttpClient
    });
  }
}
