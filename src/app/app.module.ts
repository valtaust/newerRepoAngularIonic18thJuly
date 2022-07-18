import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HomePage } from '../app/home/home.page';

import { RouterModule } from '@angular/router';
//import { TestModule } from '../app/TestModule';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent /*TestModule*/, HomePage],
  //exports:[//HomePage], //add export to handle the shared module error
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: 'TestModule', component: TestModule },
      { path: 'HomePage', component: HomePage },
      //{ path: 'SettingsPage', component: SettingsPage },
    ]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
