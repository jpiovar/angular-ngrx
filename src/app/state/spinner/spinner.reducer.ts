export interface State {
  isOn: boolean;
}

export const initialState: State = {
  isOn: false
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case 'startSpinner': {
      return {
        isOn: true
      };
    }

    case 'stopSpinner': {
      return {
        isOn: false
      };
    }

    default:
      return state;
  }
}
