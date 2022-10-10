import React from "react";
import { shallow, mount } from "enzyme";

import Home from "./Home";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
  // test("should render component of useState", () => {
  //   let setCartIsShown = jest.fn();
  //   const useStateSpy = jest.spyOn(React, "useState");
  //   useStateSpy.mockReturnValue([true, setCartIsShown]);
  //   const wrapper = shallow(<Home />);

  //   wrapper.update();
  // });
});
