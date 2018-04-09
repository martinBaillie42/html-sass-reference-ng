import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import { ReferenceModule } from './reference/reference.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReferenceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
