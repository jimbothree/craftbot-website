import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionSettingsComponent } from './components/connection-settings/connection-settings.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ConnectionSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ConnectionSettingsComponent
  ],
  entryComponents: [
    ConnectionSettingsComponent
  ]
})
export class SettingsModule { }
