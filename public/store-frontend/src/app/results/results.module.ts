import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultsRoutesModule } from "./results.routes.module";
import { ComponentsModule } from "./components";

import { StoreModule } from "@ngrx/store";

import { reducer } from "./reducers/results.reducer";
import { ResultsEffects } from "./effects/results.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutesModule,
    ComponentsModule,
    StoreModule.forFeature("results", reducer),
    EffectsModule.forFeature([ResultsEffects])
  ],
  providers: []
})
export class ResultsModule {}
