import {
  AppActionsUnion,
  AppActionTypes,
  RequestLoaduser,
  UserLoaded,
  StationSchemasLoaded
} from "../actions/app.actions";
import { User } from "../models/user.model";
import { StationSchema } from "../models/stationschema.model";

enum Status {
  Loading,
  Refreshing,
  Loaded,
  Error
}

export interface State {
  loggedIn: boolean;
  user: User | null;
  status: Status;
  api_root: string;
  currentUserLoaded: boolean;
  stationSchemasLoaded: boolean;
  stationschemas: StationSchema[];
}

//fix-me load state from server
export const initialState: State = {
  loggedIn: true,
  user: null,
  stationschemas: [],
  status: Status.Loading,
  api_root: "/api/v1/",
  currentUserLoaded: false,
  stationSchemasLoaded: false
};

export function reducer(state = initialState, action: AppActionsUnion): State {
  switch (action.type) {
    case AppActionTypes.Logout: {
      return initialState;
    }
    case AppActionTypes.UserLoaded:
      const user = (action as UserLoaded).payload.user;
      return { ...state, ...{ user: user } };
    case AppActionTypes.StationSchemasLoaded:
      const schemas = (action as StationSchemasLoaded).payload.stationschemas;
      return { ...state, ...{ stationschemas: schemas } };

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
