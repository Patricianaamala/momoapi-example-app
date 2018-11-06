import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "toolbar.html",
  styleUrls: ["toolbar.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() logout = new EventEmitter();
}
