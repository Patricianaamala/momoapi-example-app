import { Action, combineReducers } from "@ngrx/store";
import { ResultsActions, ResultsActionTypes } from "../actions/results.actions";

import { ReportingPeriod } from "../../core/models/reportingperiod.model";

import { State as RootState } from "../../reducers";

export interface State extends RootState {
  results: {
    reportingPeriods: ReportingPeriod[];
  };
}

const reducers = combineReducers<State["results"], any>({
  reportingPeriods(state = [], action: Action) {
    switch (action.type) {
      case ResultsActionTypes.LoadResultss:
        return state;
    }
  }
});

export function reducer(s: State["results"], a: Action) {
  return reducers(s, a);
}
