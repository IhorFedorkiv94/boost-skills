import {activateHomePageType} from "./actions";

export interface HomeState {
  isHomePage: boolean;
}

const defaultHomeState: HomeState = {
  isHomePage: false
};

export const home = (state: HomeState = defaultHomeState, actions: {type: string; payload: boolean}): HomeState => {
  switch (actions.type) {
    case activateHomePageType.SUCCESS:
      return {...state, isHomePage: actions.payload};
    default:
      return state;
  }
};
