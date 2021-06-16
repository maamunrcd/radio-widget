import {
  LOAD_STATIONS,
  LOAD_STATIONS_SUCCESSFULLY,
  LOAD_STATIONS_ERROR,
  SELECT_STATION,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  stationList: [],
  error: false,
  selectStation: null,
};

export default function radioStation(state = initialState, action) {
  switch (action.type) {
    case LOAD_STATIONS:
      return {
        ...state,
        isLoading: true,
        stationList: [],
      };
    case LOAD_STATIONS_SUCCESSFULLY:
      return {
        ...state,
        isLoading: false,
        stationList: action.stationList,
      };
    case LOAD_STATIONS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case SELECT_STATION:
      const selectedCurrentItem = state.stationList.filter(
        (station) => station.id === action.id
      );
      let selectedItem;
      if (state.selectStation) {
        selectedItem = selectedCurrentItem.some(
          (item, index) => item.id === state.selectStation[index].id
        );
      }
      return {
        ...state,
        selectStation: !selectedItem ? selectedCurrentItem : null,
      };
    default:
      return state;
  }
}
