import { LOAD_STATIONS, LOAD_STATIONS_ERROR, LOAD_STATIONS_SUCCESSFULLY, SELECT_STATION } from './constants';

export function loadStations() {
    return {
        type: LOAD_STATIONS
    };
}

export function stationsLoaded(stationList) {
    return {
        type: LOAD_STATIONS_SUCCESSFULLY,
        stationList
    };
}

export function loadStationsError(error) {
    return {
        type: LOAD_STATIONS_ERROR,
        error
    };
}

export function selectStation(id) {
    return {
        type: SELECT_STATION,
        id
    };
}