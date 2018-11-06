import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ResultsActions, ResultsActionTypes } from "../actions/results.actions";

@Injectable()
export class ResultsEffects {
  @Effect() effect$ = this.actions$.ofType(ResultsActionTypes.LoadResultss);

  constructor(private actions$: Actions) {}
}
