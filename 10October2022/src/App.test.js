import { render, screen } from "@testing-library/react";
import HeroBanner from "./components/HeroBanner";
import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { UserAuthContextProvider } from "./context/UserAuthContext";
describe("render component", () => {
  test("should render component", () => {
    const wrapper = shallow(
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  let setup = () => shallow(<App />);
  test("render component without crashing", () => {
    let wrapper = setup();
    // console.log(wrapper.debug());
    let component = wrapper.find("[data-testid='component-list-user']");
    expect(component.length).toBe(1);
  });
});
