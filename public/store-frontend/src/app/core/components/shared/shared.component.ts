import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-shared-component",
  templateUrl: "shared-component.html",
  styleUrls: ["shared.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent {
  pages = [
    {
      path: "/surveys/dashboard",
      hint: "The indicators Dashboard",
      label: "Indicator Dashboard"
    },
    {
      path: "/surveys/indicators",
      hint: "All Indicators",
      label: "All indicators"
    },
    {
      path: "/surveys/resources",
      hint: "Resources",
      label: "Resources"
    },
    {
      path: "/surveys/results",
      hint: "Results",
      label: "Results"
    }
  ];
}
