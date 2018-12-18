import { ConfigAction, ConfigActionTypes } from '../actions/config.actions';
import { Config } from '@app/core/models/config.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  config: Config;
  loaded: boolean;
}

export const initialState: State = {
  config: {
    API_KEY: '',
    DEBUG: false,
    LOG_TO_FILE: false
  },
  loaded: false
};

export function reducer(state: State = initialState, action: ConfigAction): State {
  switch (action.type) {
    case ConfigActionTypes.LoadSuccess: return { loaded: true, config: action.playload };

    default: return state;
  }
}

export const getConfigState = createFeatureSelector<State>('config');
export const getIsLoaded = createSelector(getConfigState, state => state && state.loaded);
export const getConfig = createSelector(getConfigState, state => state && state.config);
