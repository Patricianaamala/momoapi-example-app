import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ResourcesComponent } from "./resources.component";
import { MaterialModule } from "../../material";
import { CoreModule } from "../../core/core.module";

export const COMPONENTS = [ResourcesComponent];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, CoreModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {}
