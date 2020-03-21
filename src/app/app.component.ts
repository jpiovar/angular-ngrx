import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { StartSpinner, StopSpinner } from './state/spinner/spinner.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';

  spinner$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.spinner$ = this.store.pipe(select(state => state.spinner.isOn));
  }

  clicker() {
    debugger;
    this.store.dispatch(new StartSpinner());
    setTimeout(() => {
      this.store.dispatch(new StopSpinner());
    }, 2000);
  }
}
