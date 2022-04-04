import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListShoppingComponent } from './list-shopping/list-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ListShoppingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
