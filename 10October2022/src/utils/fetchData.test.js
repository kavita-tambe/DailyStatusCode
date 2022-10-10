import React from "react";
import { shallow, mount } from "enzyme";
import fetchData from "../utils/fetchData";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<fetchData />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component without error", () => {
    let componentFun = {
      fetchData: jest.fn(),
    };
    const wrapper = shallow(<fetchData {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });
});
