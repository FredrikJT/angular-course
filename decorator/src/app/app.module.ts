import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeRulesComponent } from './joke-rules/joke-rules.component';
import { AddNewJokeComponent } from './add-new-joke/add-new-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeRulesComponent,
    AddNewJokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
