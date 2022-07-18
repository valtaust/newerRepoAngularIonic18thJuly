import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
//import { IonButton } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // IonButton
  ],
  declarations: [HomePage],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomePageModule {}

/* core.mjs:10538 NG0303: Can't bind to 'navPush' since it isn't a known property of 'button' (used in the 'HomePage' component template).
1. If 'button' is an Angular component and it has the 'navPush' input, then verify that it is a part of an @NgModule where this component is declared.
2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.  error msg*/
