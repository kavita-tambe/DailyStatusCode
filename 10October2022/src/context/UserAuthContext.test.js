import React from "react";
import { shallow, mount } from "enzyme";
import { UserAuthContextProvider } from "./UserAuthContext";
describe("render component with function", () => {
  test("should render component without error", () => {
    let componentFun = {
      createContext: jest.fn(),
    };
    const wrapper = shallow(<UserAuthContextProvider {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component without error ...", () => {
    let componentFun = {
      UserAuthContextProvider: jest.fn(),
    };
    const wrapper = shallow(<UserAuthContextProvider {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should render component without error ..", () => {
    let componentFun = {
      signInWithEmailAndPassword: jest.fn(),
    };
    const wrapper = shallow(<UserAuthContextProvider {...componentFun} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component of useState", () => {
    let setUser = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setUser]);
    const wrapper = shallow(<UserAuthContextProvider />);

    wrapper.update();
  });
});
