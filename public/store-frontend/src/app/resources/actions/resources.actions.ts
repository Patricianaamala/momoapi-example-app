import { Action } from '@ngrx/store';

export enum ResourcesActionTypes {
  LoadResourcess = '[Resources] Load Resourcess'
}

export class LoadResources implements Action {
  readonly type = ResourcesActionTypes.LoadResourcess;
}

export type ResourcesActions = LoadResources;
