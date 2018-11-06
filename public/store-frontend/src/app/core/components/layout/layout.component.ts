import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-one-layout",
  templateUrl: "layout-component.html",
  styleUrls: ["layout-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
