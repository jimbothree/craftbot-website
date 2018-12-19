import { Component, OnInit, Inject } from '@angular/core';
import { Config } from '@app/core/models/config.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { deepCopy } from '@app/utils';

@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.scss']
})
export class SettingsLayoutComponent implements OnInit {
  config: Config;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: Config
  ) { }

  ngOnInit() {
    this.config = deepCopy(this.data);
  }

}
