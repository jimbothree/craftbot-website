import { Component, OnInit } from '@angular/core';
import { RootState } from '@app/core/store/reducers';
import { Store } from '@ngrx/store';
import { ConfigOpenSettings } from '@app/core/store/actions/config.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private readonly store: Store<RootState>
  ) { }

  ngOnInit() {
  }

  openSettings() {
    this.store.dispatch(new ConfigOpenSettings());
  }

}
