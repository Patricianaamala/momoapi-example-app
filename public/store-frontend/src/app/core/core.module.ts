import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutComponent } from "./components/layout/layout.component";
import { NavItemComponent } from "./components/nav-item/nav-item.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { AppComponent } from "./containers/app.component";

import { MaterialModule } from "../material";
import { SharedComponent } from "./components/shared/shared.component";

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
  SharedComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {}
