import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
//import { SettingsPage } from '../settings/settings.page';
//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  template: `
  <img 
  src="https://openweathermap.org/weathermap?basemap={{city}}&zoom=true&layer=temperature&{lat}.0741&{lon}.8330&zoom=7" />
  <h3>
    <img [src]="weatherIconURL + data?.weather[0].icon +'.png'">
    {{data?.weather[0].description}} / {{data?.main.temp}}°
  </h3>

  <pre>{{data?.coord.lat}} {{data?.coord.lon}}°</pre> 
  <pre>data:\n{{data | json}}</pre> 

  <div>
    <home [city]="cityName"></home>
    <input
      type="text"
      placeholder="Search a city"
      [ngModel]="cityName"
      #cityInput
    />
  </div>,`,
  //data[0] is start parsing json as array: Object[]
  // <div #cityInput [(ngModel)]="cityName"> type="text" placeholder="Search a city"
  //</div>
})
export class HomePage implements OnInit {
  @Input() city: string;
  data: any;

  weatherIconURL = 'https://openweathermap.org/img/w/';
  weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
  weatherParams = '&units=metric&APPID=c074c245788df1799579865e74f04a2b';
  cityInput: any;

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges) {
    const { city } = changes;
    this.fetchData(city.currentValue);
  }

  //ngOnInit() {
  //this.city;
  //}

  fetchData(text = '') {
    const url = `${this.weatherAPI}${text}${this.weatherParams}`;

    this.http.get(url).subscribe((res) => {
      this.data; // .json() not working with HttpClient
    });
  }

  // @ViewChild('cityInput') cityInput: any;
  //@ViewChild('cityInput', { static: false, read: ElementRef }) elRef;

  //ViewChild returns NgModel associated with the nameInput
  @ViewChild('cityInput', { read: NgModel }) inRef;
  cityName: string = 'Galway';

  //ngAfterViewInit(){
  //this.cityInput.nativeElement.innerHTML =  ;
  //}

  ngOnInit() {
    Observable.apply(
      //replaced fromEvent with reply
      this.cityInput.nativeElement,
      'keyup'
    )
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length <= 1) //obtain less than 2 args here
      .debounceTime(1000)
      .subscribe((text: string) => this.go(text));
  }

  go(text): void {
    this.cityName = text; // update map
  }
}
