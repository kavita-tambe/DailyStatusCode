import React from "react";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
// import { render, screen } from "@testing-library/react";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

import { UserAuthContextProvider } from "../context/UserAuthContext";
describe("render component", () => {
  test("should render component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const data = render(
      <BrowserRouter>
        <UserAuthContextProvider>
          <Login />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
    // expect(wrapper.getElements()).toMatchSnapshot();
    expect(data).toBeTruthy();
  });
  test("should render component without error..", () => {
    let componentFun = {
      emailChangeHandler: jest.fn(),
    };
    const wrapper = shallow(
      // <useUserAuth>
      //   <Login {...componentFun} />
      // </useUserAuth>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Login {...componentFun} />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
  });
  test("should render component of useState", () => {
    let setEmail = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setEmail]);
    const wrapper = shallow(
      <useUserAuth>
        <Login />
      </useUserAuth>
    );

    wrapper.update();
  });

  test("should render component of useState setPassword", () => {
    let setPassword = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setPassword]);
    const wrapper = shallow(
      <useUserAuth>
        <Login />
      </useUserAuth>
    );

    wrapper.update();
  });
  test("should render component of useState error", () => {
    let setEmailError = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([true, setEmailError]);
    const wrapper = shallow(
      <useUserAuth>
        <Login />
      </useUserAuth>
    );

    wrapper.update();
  });

  test("should render component without error", () => {
    let componentFun = {
      createTheme: jest.fn(),
    };
    const wrapper = shallow(
      <useUserAuth>
        <Login {...componentFun} />
      </useUserAuth>
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("should render component without error...", () => {
    let componentFun = {
      Login: jest.fn(),
    };
    const wrapper = shallow(
      <useUserAuth>
        <Login {...componentFun} />
      </useUserAuth>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
// import React from "react";
// import { shallow } from "enzyme";

// describe("should render component", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(
//       <useUserAuth>
//         <Login />
//       </useUserAuth>
//     );
//   });

//   let setEmail = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState");
//   useStateSpy.mockImplementation((init) => [init, setEmail]);

//   let setPassword = jest.fn();
//   const useStateSpypassword = jest.spyOn(React, "useState");
//   useStateSpypassword.mockImplementation((init) => [init, setPassword]);

//   let setEmailError = jest.fn();
//   const useStateSpyemailerr = jest.spyOn(React, "useState");
//   useStateSpyemailerr.mockImplementation((init) => [init, setEmailError]);

//   let setPasswordError = jest.fn();
//   const useStateSpypass = jest.spyOn(React, "useState");
//   useStateSpypass.mockImplementation((init) => [init, setPasswordError]);

//   test("render component without error", () => {
//     let component = wrapper.find("[data-testid='component-list']");
//     expect(component).toBe(true);
//   });
// });
describe("Executes a handler function", () => {
  it("must call the mock method", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <UserAuthContextProvider>
          <Login />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
    const textField = wrapper.find("TextField");
    const instance = wrapper.instance();

    instance.emailChangeHandler = jest.fn(instance.btnClick);

    textField.simulate("email");
    expect(instance.emailChangeHandler).toHaveBeenCalled();
  });
});
