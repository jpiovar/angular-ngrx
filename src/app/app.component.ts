import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

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
    this.store.dispatch({ type: 'startSpinner' });
    setTimeout(() => {
      this.store.dispatch({ type: 'stopSpinner' });
    }, 2000);
  }
}
