import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{DataService} from'./dataservice';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
