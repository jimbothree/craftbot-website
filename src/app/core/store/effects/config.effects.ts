import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RootState, fromConfig } from '../reducers';
import { Store, select } from '@ngrx/store';
import { ConfigActionTypes, ConfigLoadSuccess, ConfigSave } from '../actions/config.actions';
import { MatDialog } from '@angular/material/dialog';
import { map, switchMap, filter } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { defer } from 'rxjs';

import gql from 'graphql-tag';
import { Config } from '@app/core/models/config.model';
import { SettingsLayoutComponent } from '@app/settings/components/settings-layout/settings-layout.component';

@Injectable()
export class ConfigEffects {

  constructor(
    private readonly actions: Actions,
    private readonly store: Store<RootState>,
    private readonly dialog: MatDialog,
    private readonly apollo: Apollo
  ) { }

  @Effect()
  openSettings$ = this.actions.pipe(
    ofType(ConfigActionTypes.OpenSettings),
    switchMap(() => this.store.pipe(select(fromConfig.getConfig))),
    switchMap((config) => {
      const dialogRef = this.dialog.open(SettingsLayoutComponent, {
        width: '500px',
        data: config
      });

      return dialogRef.afterClosed();
    }),
    filter<Config>(result => !!result),
    map(result => new ConfigSave(result))
  );

  @Effect({ dispatch: false })
  saveConfig$ = this.actions.pipe(
    ofType(ConfigActionTypes.Save)
  );

  @Effect()
  loadConfig$ = defer(() => this.apollo.watchQuery<ConfigResponse>({
    query: CONFIG_QUERY
  }).valueChanges.pipe(
    map(result => new ConfigLoadSuccess(result.data.configuration))
  ));
}

interface ConfigResponse {
  configuration: Config;
}

const CONFIG_QUERY = gql`
  {
    configuration {
      API_KEY
      DEBUG
      LOG_TO_FILE
    }
  }
`;
