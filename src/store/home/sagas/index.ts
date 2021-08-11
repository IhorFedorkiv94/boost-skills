/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {ForkEffect, put, takeLatest} from "redux-saga/effects";
import {GenericAction, PayloadWithCallbacks} from "../../types";
import {activateHomePageType} from "../actions";

//eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* workerHomePage(action: GenericAction<PayloadWithCallbacks<boolean>>) {
  // test
  yield put({
    type: activateHomePageType.SUCCESS,
    payload: action.payload.data
  });
}

export default function* homeSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(activateHomePageType.INIT, workerHomePage);
}
