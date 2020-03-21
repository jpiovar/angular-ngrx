import { Action } from '@ngrx/store';
import { State } from './spinner.reducer';

export enum SpinnerActionTypes {
  StartSpinner = '[Spinner Page] Start Spinner',
  StopSpinner = '[Spinner Page] Stop Spinner'
}

export class StartSpinner implements Action {
  readonly type = SpinnerActionTypes.StartSpinner;
  constructor(public payload: State = { isOn: true }) {}
}

export class StopSpinner implements Action {
  readonly type = SpinnerActionTypes.StopSpinner;
}

export type SpinnerActions = StopSpinner | StartSpinner;
