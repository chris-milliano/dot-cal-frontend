// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";

// Custom Common Imports
import { AppRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { AppActions } from "./app.actions";
import { rootReducer } from "../state";

// Custom Project Specific Imports
import { PagesModule } from "../pages/pages.module";
import { SharedModule } from "../shared/shared.module";
import { ServicesModule } from "../services/services.module"
import { AppEffects } from "../state/effects";

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutes,
        ServicesModule,
        PagesModule,
        SharedModule,
        StoreModule.provideStore(rootReducer),
        RouterStoreModule.connectRouter(),
        AppEffects
    ],
    providers: [ AppActions ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
