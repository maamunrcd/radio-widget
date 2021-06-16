import { put, takeLatest } from "redux-saga/effects";

import { LOAD_STATIONS } from "../../actions/constants";
import { loadStations, loadStationsError, stationsLoaded } from "../../actions";

import rootSaga, { fetchStationList } from "../index";
/* eslint-disable redux-saga/yield-effects */
describe("fetchStationList Saga", () => {
  let fetchStationListGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    fetchStationListGenerator = fetchStationList();

    const callDescriptor = fetchStationListGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the stationsLoaded action if it requests the data successfully without URL", () => {
    const response = [
      {
        id: 1,
        title: "Putin FM",
        freq: "66,6",
      },
      {
        id: 2,
        title: "Dribbble FM",
        freq: "101,2",
      },
    ];

    const putDescriptor = fetchStationListGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(stationsLoaded(response)));
  });

  it("should call the loadStationsError action if the response errors", () => {
    const response = new Error("Some error");

    const putDescriptor = fetchStationListGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(loadStationsError(response)));
  });
});

describe("rootSaga Saga", () => {
  const rootSagaData = rootSaga();
  it("should start task to watch for LOAD_REPOS action", () => {
    const takeLatestDescriptor = rootSagaData.next().value;

    expect(takeLatestDescriptor).toEqual(
      takeLatest(LOAD_STATIONS, fetchStationList)
    );
  });
});
