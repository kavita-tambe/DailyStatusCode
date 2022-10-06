import React from "react";
import { shallow, mount } from "enzyme";

import HeroBanner from "./HeroBanner";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<HeroBanner />);
    expect(wrapper.exists()).toBe(true);
  });
});
