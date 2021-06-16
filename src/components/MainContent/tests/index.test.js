import React from "react";
import { render, screen } from "@testing-library/react";
import MainContent, { mapDispatchToProps } from "../index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import radioStation from "../../../reducers";
import { selectStation } from "../../../actions";
import rootSaga from "../../../sagas";
const sagaMiddleware = createSagaMiddleware();

describe("MainContent", () => {
  let store;
  beforeAll(() => {
    store = createStore(radioStation, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
  });

  it("should show empty node if props empty", () => {
    render(
      <Provider store={store}>
        <MainContent
          isLoading={false}
          stationList={[]}
          onSelectStation={jest.fn()}
          selectItem={[]}
          error={false}
        />
      </Provider>
    );
    const mainContainerNode = screen.getByTestId("stationlist");
    expect(mainContainerNode.children).toHaveLength(0);
  });

  it("should show nodes if props not empty", () => {
    render(
      <Provider store={store}>
        <MainContent
          isLoading={false}
          stationList={[
            {
              id: 2,
              title: "Dribbble FM",
              freq: "101,2",
            },
          ]}
          onSelectStation={jest.fn()}
          selectItem={[]}
          error={false}
        />
      </Provider>
    );
    const mainContainerNode = screen.getByTestId("stationlist");
    expect(mainContainerNode.children).not.toBeNull();
  });

  describe("mapDispatchToProps", () => {
    describe("onSelectStation", () => {
      it("should be injected", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.onSelectStation).toBeDefined();
      });

      it("should dispatch selectStation when click", () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSelectStation();
        expect(dispatch).toHaveBeenCalledWith(selectStation());
      });
    });
  });
});
