import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-connection-settings',
  templateUrl: './connection-settings.component.html',
  styleUrls: ['./connection-settings.component.scss']
})
export class ConnectionSettingsComponent implements OnInit, OnDestroy {
  private _apiKey: string;

  @Output()
  apiKeyChange = new EventEmitter<string>();

  @Input()
  get apiKey(): string { return this._apiKey; }
  set apiKey(val: string) {
    this._apiKey = val;
    this.apiKeyChange.emit(this._apiKey);
  }

  apiKeyControl: FormControl;

  private ngUnsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.apiKeyControl = new FormControl(this.apiKey, [Validators.required]);
    this.apiKeyControl
      .valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(val => this.apiKey = val);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
