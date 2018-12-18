import { Params } from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export const RouterFeatureId = 'router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(RouterFeatureId);
