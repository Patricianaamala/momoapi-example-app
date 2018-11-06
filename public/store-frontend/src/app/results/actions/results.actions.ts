import { Action } from '@ngrx/store';

export enum ResultsActionTypes {
  LoadResultss = '[Results] Load Resultss'
}

export class LoadResults implements Action {
  readonly type = ResultsActionTypes.LoadResultss;
}

export type ResultsActions = LoadResults;
