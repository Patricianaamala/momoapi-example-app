import { Action } from "@ngrx/store";
import { User } from "../models/user.model";
import { StationSchema } from "../models/stationschema.model";

export enum AppActionTypes {
  Login = "[app] Login",
  Logout = "[app] Logout",
  RequestLoadUser = "[app] Request Load User",
  UserLoaded = "[app] User Loaded",
  RequestLoadStationSchemas = "[app] Request Load Station Schemas",
  StationSchemasLoaded = "[app]  Station Schemas Loaded"
}

export class RequestLoaduser implements Action {
  readonly type = AppActionTypes.RequestLoadUser;
}

export class UserLoaded implements Action {
  readonly type = AppActionTypes.UserLoaded;
  constructor(public payload: { user: User }) {}
}

export class RequestLoadStationSchemas implements Action {
  readonly type = AppActionTypes.RequestLoadStationSchemas;
}

export class StationSchemasLoaded implements Action {
  readonly type = AppActionTypes.StationSchemasLoaded;
  constructor(public payload: { stationschemas: StationSchema[] }) {}
}

export class Login implements Action {
  readonly type = AppActionTypes.Login;
}

export class Logout implements Action {
  readonly type = AppActionTypes.Logout;
}

export type AppActionsUnion =
  | Login
  | Logout
  | StationSchemasLoaded
  | RequestLoadStationSchemas
  | UserLoaded
  | RequestLoaduser;
