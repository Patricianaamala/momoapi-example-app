import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { CoreModule } from "./core/core.module";
import { ResultsModule } from "./results/results.module";
import { ResourcesModule } from "./resources/resources.module";

import { reducers, metaReducers } from "./reducers";

import { AppComponent } from "./core/containers/app.component";
import { environment } from "../environments/environment";
import { AppRoutesModule } from "./app-routes.module";
import { MaterialModule } from "./material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    ResultsModule,
    ResourcesModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: "router"
    }),

    StoreDevtoolsModule.instrument({
      name: "MOMO Store",
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
