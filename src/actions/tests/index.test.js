import { LOAD_STATIONS, LOAD_STATIONS_ERROR, LOAD_STATIONS_SUCCESSFULLY, SELECT_STATION } from '../constants';

import { loadStations, loadStationsError, stationsLoaded } from '../index';

describe('Stations Actions', () => {
    describe('loadStations', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: LOAD_STATIONS,
            };

            expect(loadStations()).toEqual(expectedResult);
        });
    });

    describe('stationsLoaded', () => {
        it('should return the correct type and the passed repos', () => {
            const mockStationsData = [
                {
                    "id": 1,
                    "title": "Putin FM",
                    "freq": "66,6"
                },
                {
                    "id": 2,
                    "title": "Dribbble FM",
                    "freq": "101,2"
                }
            ];
            const expectedResult = {
                type: LOAD_STATIONS_SUCCESSFULLY,
                stationList: mockStationsData,
            };

            expect(stationsLoaded(mockStationsData)).toEqual(expectedResult);
        });
    });

    describe('loadStationsError', () => {
        it('should return the correct type and the passed repos', () => {
            const mockError = {
                msg: 'Something went wrong!',
            };
            const expectedResult = {
                type: LOAD_STATIONS_ERROR,
                error: mockError,
            };

            expect(loadStationsError(mockError)).toEqual(expectedResult);
        });
    });
});