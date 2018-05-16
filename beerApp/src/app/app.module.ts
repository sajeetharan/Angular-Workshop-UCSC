import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchBeerComponent} from './search-beer/search-beer.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchBeerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
