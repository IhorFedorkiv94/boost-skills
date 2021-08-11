import {createReduxAsyncAction, createReduxAsyncType} from "../../utils/redux";
import {PayloadWithCallbacks} from "../types";

export const HOME_ACTIONS = "HOME_ACTIONS";

export const activateHomePageType = createReduxAsyncType(HOME_ACTIONS);
export const activateHomePage = createReduxAsyncAction<PayloadWithCallbacks<boolean>, void>(activateHomePageType);
