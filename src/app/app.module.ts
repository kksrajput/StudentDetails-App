import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDetailsListComponent } from './student-details-list/student-details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
