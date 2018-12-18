import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterFeatureId } from './store/reducers/router.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment.prod';
import { OutputComponent } from './components/output/output.component';
import { ChannelComponent } from './components/channel/channel.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { SettingsModule } from '@app/settings/settings.module';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    OutputComponent,
    ChannelComponent,
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      stateKey: RouterFeatureId
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SettingsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. This module can only be imported in the AppModule`);
    }
  }
}
