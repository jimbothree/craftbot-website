import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RootState, fromConfig } from '../reducers';
import { Store, select } from '@ngrx/store';
import { ConfigActionTypes, ConfigLoadSuccess } from '../actions/config.actions';
import { MatDialog } from '@angular/material/dialog';
import { map, switchMap } from 'rxjs/operators';
import { ConnectionSettingsComponent } from '@app/settings/components/connection-settings/connection-settings.component';
import { Apollo } from 'apollo-angular';
import { defer } from 'rxjs';

import gql from 'graphql-tag';
import { Config } from '@app/core/models/config.model';

@Injectable()
export class ConfigEffects {

  constructor(
    private readonly actions: Actions,
    private readonly store: Store<RootState>,
    private readonly dialog: MatDialog,
    private readonly apollo: Apollo
  ) { }

  @Effect({ dispatch: false })
  openSettings$ = this.actions.pipe(
    ofType(ConfigActionTypes.OpenSettings),
    switchMap(() => this.store.pipe(select(fromConfig.getConfig))),
    switchMap((config) => {
      const dialogRef = this.dialog.open(ConnectionSettingsComponent, {
        width: '500px',
        data: config
      });

      return dialogRef.afterClosed();
    })
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
