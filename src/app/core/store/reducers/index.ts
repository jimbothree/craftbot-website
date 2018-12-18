import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';

import * as fromMessage from './message.reducer';
import * as fromConfig from './config.reducer';

export { fromMessage, fromConfig };

export interface RootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  message: fromMessage.State;
  config: fromConfig.State;
}

export const reducers: ActionReducerMap<RootState> = {
  router: fromRouter.routerReducer,
  message: fromMessage.reducer,
  config: fromConfig.reducer
};

export const getRootState = (state: RootState) => state;
