import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Config } from '@app/core/models/config.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-connection-settings',
  templateUrl: './connection-settings.component.html',
  styleUrls: ['./connection-settings.component.scss']
})
export class ConnectionSettingsComponent implements OnInit {
  connectionForm: FormGroup;
  formLoaded = false;

  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private readonly data: Config
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.connectionForm = this.fb.group({
      apiKey: [this.data.API_KEY, Validators.required]
    });
  }

  onSubmit() {

  }

}
