import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";

import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

import { UserAuthContextProvider } from "../context/UserAuthContext";
describe("render component", () => {
  test("should render component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const data = render(
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar />
        </UserAuthContextProvider>
      </BrowserRouter>
    );

    expect(data).toBeTruthy();
  });
  test("should render component without error", () => {
    let componentFun = {
      handleLogout: jest.fn(),
    };
    const wrapper = shallow(
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar {...componentFun} />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
