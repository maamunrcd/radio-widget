import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

describe("<Header />", () => {
  it("should render its heading", () => {
    const {
      container: { firstChild },
    } = render(<Header />);

    expect(firstChild).toMatchSnapshot();
  });
});
