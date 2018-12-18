import { Action } from '@ngrx/store';
import { Config } from '@app/core/models/config.model';

export enum ConfigActionTypes {
  Load = '[Config] load',
  LoadSuccess = '[Config] load success',
  OpenSettings = '[Config] open settings'
}

export class ConfigLoad implements Action {
  readonly type = ConfigActionTypes.Load;
}

export class ConfigLoadSuccess implements Action {
  readonly type = ConfigActionTypes.LoadSuccess;

  constructor(public playload: Config) { }
}

export class ConfigOpenSettings implements Action {
  readonly type = ConfigActionTypes.OpenSettings;
}

export type ConfigAction =
  ConfigLoad |
  ConfigLoadSuccess |
  ConfigOpenSettings;
