import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromRoot from "../../reducers";
import * as LayoutActions from "../actions/layout.actions";
import * as AppActions from "../actions/app.actions";

@Component({
  selector: "one-app",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "app-component.html",
  styleUrls: ["app-component.css"]
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

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

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromRoot.getLoggedIn));
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  logout() {
    this.closeSidenav();

    this.store.dispatch(new AppActions.Logout());
  }
}
