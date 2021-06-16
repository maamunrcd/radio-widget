import { call, put, takeLatest } from "redux-saga/effects";
import { stationsLoaded, loadStationsError } from "../actions";
import { LOAD_STATIONS } from "../actions/constants";
import request from "../utils/request";

export function* fetchStationList() {
  try {
    const responseData = yield call(request, "station.json");
    yield put(stationsLoaded(responseData));
  } catch (err) {
    yield put(loadStationsError(err));
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_STATIONS, fetchStationList);
}
