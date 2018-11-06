import { Action } from "@ngrx/store";
import {
  ResourcesActions,
  ResourcesActionTypes
} from "../actions/resources.actions";

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: ResourcesActions): State {
  switch (action.type) {
    case ResourcesActionTypes.LoadResourcess:
      return state;

    default:
      return state;
  }
}
