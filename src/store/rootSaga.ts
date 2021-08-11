import {all, AllEffect, ForkEffect} from "redux-saga/effects";
import homeSaga from "./home/sagas";

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
  const sagas = [homeSaga()];

  yield all(sagas);
}
