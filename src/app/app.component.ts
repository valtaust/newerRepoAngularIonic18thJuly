import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
//import { NavController } from '@ionic/angular';
import { HomePage } from '../app/home/home.page';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  rootPage = HomePage;

  @ViewChild('cityInput') cityInput: any;
  cityName: string = 'Galway';

  OnInit(): void {
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

/* 
	apiKey = 'c074c245788df1799579865e74f04a2b';
	//url;
  
  constructor(private hc: HttpClient) { 
   console.log('Hello WeatherProvider Provider');
  }
  
  getRemoteData(): Observable<any>{
	  return this.hc.get("https://openweathermap.org/current"); //early draft api later 

    */
