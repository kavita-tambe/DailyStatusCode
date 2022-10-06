import React from "react";
import { shallow, mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";

describe("render component", () => {
  test("should render component", () => {
    const { logOut } = useUserAuth();

    const wrapper = shallow(<Login {...logOut} />);
    expect(wrapper.length).toBe(1);
  });
});

describe("login testing", () => {
  test("renders Loginpage without crashing", () => {
    const wrapper = shallow(
      <useUserAuth>
        <Login />
      </useUserAuth>
    );
  });
});
