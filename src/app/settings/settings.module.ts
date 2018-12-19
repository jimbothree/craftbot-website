import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionSettingsComponent } from './components/connection-settings/connection-settings.component';
import { SharedModule } from '@app/shared/shared.module';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';

@NgModule({
  declarations: [
    ConnectionSettingsComponent,
    SettingsLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConnectionSettingsComponent
  ],
  entryComponents: [
    SettingsLayoutComponent
  ]
})
export class SettingsModule { }
