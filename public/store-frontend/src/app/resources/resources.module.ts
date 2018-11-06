import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourcesRoutesModule } from "./resources.routes.module";
import { ComponentsModule } from "./components";

import { StoreModule } from "@ngrx/store";

import { reducer } from "./reducers/resources.reducer";
import { ResourcesEffects } from "./effects/resources.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    ResourcesRoutesModule,
    ComponentsModule,
    StoreModule.forFeature("resources", reducer),
    EffectsModule.forFeature([ResourcesEffects])
  ],
  providers: []
})
export class ResourcesModule {}
