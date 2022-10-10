import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Loader from "./BodyPart";

describe("render component", () => {
  test("should render component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const data = render(<Loader />);

    expect(data).toBeTruthy();
  });
});
