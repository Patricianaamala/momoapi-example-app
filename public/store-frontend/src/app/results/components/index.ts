import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ResultsComponent } from "./results.component";
import { MaterialModule } from "../../material";
import { CoreModule } from "../../core/core.module";

export const COMPONENTS = [ResultsComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, CoreModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {}
