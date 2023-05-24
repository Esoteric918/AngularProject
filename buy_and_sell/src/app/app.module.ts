import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListingPageComponent, pathMatch: 'full' },
  { path: 'listing', component: ListingPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
