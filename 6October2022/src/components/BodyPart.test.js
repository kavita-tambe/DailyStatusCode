import React from "react";
import { shallow, mount } from "enzyme";

import BodyPart from "./BodyPart";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<BodyPart />);
    expect(wrapper.exists()).toBe(true);
  });
});
