import React from "react";
import { shallow, mount } from "enzyme";

import Home from "./Home";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
