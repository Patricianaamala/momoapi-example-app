import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {
  ResourcesActions,
  ResourcesActionTypes
} from "../actions/resources.actions";

@Injectable()
export class ResourcesEffects {
  @Effect() effect$ = this.actions$.ofType(ResourcesActionTypes.LoadResourcess);

  constructor(private actions$: Actions) {}
}
