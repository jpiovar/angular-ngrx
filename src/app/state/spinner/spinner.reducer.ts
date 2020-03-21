import { SpinnerActionTypes, SpinnerActions } from './spinner.actions';
import { spinnerStatus } from './spinner.types';

export interface State {
  isOn: boolean;
}

export const initialState: State = {
  isOn: false
};

export function reducer(state: State = initialState, action: SpinnerActions): State {
  switch (action.type) {
    case SpinnerActionTypes.StartSpinner: {
      debugger;
      const newState = action.payload;
      return {
        ...state, ...newState
      };
    }

    case SpinnerActionTypes.StopSpinner: {
      return {
        isOn: false
      };
    }

    default:
      return state;
  }
}
