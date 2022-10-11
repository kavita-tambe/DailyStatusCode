import React from "react";
import { shallow, mount } from "enzyme";

import Register from "./Register";
import { useUserAuth } from "../context/UserAuthContext";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
describe("render component", () => {
  test("should render component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const data = render(
      <BrowserRouter>
        <UserAuthContextProvider>
          <Register />
        </UserAuthContextProvider>
      </BrowserRouter>
    );
    // expect(wrapper.getElements()).toMatchSnapshot();
    expect(data).toBeTruthy();
  });
});
