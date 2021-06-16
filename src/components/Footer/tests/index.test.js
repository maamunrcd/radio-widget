import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Footer from "../index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import radioStation from "../../../reducers";
import rootSaga from "../../../sagas";
const sagaMiddleware = createSagaMiddleware();

describe("<Footer />", () => {
  let store;
  beforeAll(() => {
    store = createStore(radioStation, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
  });
  it("should render its all necessary node", () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Footer selectItem={null} />
      </Provider>
    );

    expect(firstChild).toMatchSnapshot();
  });

  it("Should show empty div if selectItem props empty", () => {
    render(
      <Provider store={store}>
        <Footer selectItem={null} />
      </Provider>
    );
    const footerNode = screen.getByTestId("footer");
    expect(footerNode.children).toHaveLength(0);
  });

  it("Should show children if selectItem props not empty", () => {
    render(
      <Provider store={store}>
        <Footer
          selectItem={[
            {
              id: 2,
              title: "Dribbble FM",
              freq: "101,2",
            },
          ]}
        />
      </Provider>
    );
    const footerNode = screen.getByTestId("footer");

    expect(footerNode.children).not.toBeNull();
  });
});
