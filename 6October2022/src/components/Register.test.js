import React from "react";
import { shallow, mount } from "enzyme";

import Register from "./Register";
import { useUserAuth } from "../context/UserAuthContext";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(
      <useUserAuth>
        <Register />
      </useUserAuth>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
