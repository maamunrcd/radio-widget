import {
  loadStations,
  stationsLoaded,
  loadStationsError,
} from "../../actions/index";
import radioStation from "../index";

/* eslint-disable default-case, no-param-reassign */
describe("radioStation", () => {
  let state;
  beforeEach(() => {
    state = {
      isLoading: false,
      stationList: [],
      error: false,
      selectStation: null,
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(radioStation(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the loadStations action correctly", () => {
    const expectedResult = {
      isLoading: true,
      stationList: [],
      error: false,
      selectStation: null,
    };
    const nextState = radioStation(state, loadStations());

    expect(nextState).toEqual(expectedResult);
  });

  it("should handle the stationsLoaded action correctly", () => {
    const mockStationsData = [
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
    const expectedResult = {
      isLoading: false,
      error: false,
      selectStation: null,
      stationList: [...mockStationsData],
    };

    expect(radioStation(state, stationsLoaded(mockStationsData))).toEqual(
      expectedResult
    );
  });

  it("should handle the loadStationsError action correctly", () => {
    const mockError = {
      msg: "Not found",
    };
    const expectedResult = {
      isLoading: false,
      error: mockError,
      selectStation: null,
      stationList: [],
    };

    expect(radioStation(state, loadStationsError(mockError))).toEqual(
      expectedResult
    );
  });
});
