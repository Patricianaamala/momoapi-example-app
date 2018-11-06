import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
@Component({
  selector: "app-nav-item",
  templateUrl: "nav-item-component.html",
  styleUrls: ["nav-item-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input() hint = "";
  @Input() routerLink: string | any[] = "/";
  @Output() navigate = new EventEmitter();
}
