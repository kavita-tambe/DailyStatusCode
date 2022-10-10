import React from "react";
import { shallow, mount } from "enzyme";

import BodyPart from "./BodyPart";

describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(<BodyPart />);
    expect(wrapper.exists()).toBe(true);
  });

  let setup = () => shallow(<BodyPart />);
  test("render component without crashing", () => {
    let wrapper = setup();
    let component = wrapper.find("[data-testid='component-bodypart']");
    expect(component.length).toBe(1);
  });
  test("should render component with function", () => {
    let componentFun = {
      setBodyPart: jest.fn(),
    };
    const wrapper = shallow(<BodyPart {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });

  let setup1 = () => shallow(<BodyPart />);
  test("render component without crashing..", () => {
    let wrapper = setup1();
    let component = wrapper.find("[data-testid='component-bodypart1']");
    expect(component.length).toBe(1);
  });
});
