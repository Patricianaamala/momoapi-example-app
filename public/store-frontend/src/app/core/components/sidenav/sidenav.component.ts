import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "sidenav-component.html",
  styleUrls: ["sidenav-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Input() open = false;
}
