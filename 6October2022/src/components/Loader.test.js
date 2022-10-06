import React from "react";
import { shallow, mount } from "enzyme";

import Loader from "./BodyPart";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
  });
});
