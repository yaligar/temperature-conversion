/**
 * @jest-environment jsdom
 */
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
import Converter from "../components/Converter";
import React from "react";

import { shallow, mount } from "enzyme";
describe("Unit testing for converter", () => {
  const wrapper = mount(<Converter />);
  test("If swap button is being rendered.", () => {
    expect(wrapper.find("button").at(0).text()).toBeDefined();
    expect(wrapper.find("button")).toHaveLength(1);
    const event = { handleClickSwap: () => {} };
    jest.spyOn(event, "handleClickSwap");
    wrapper.find("button").simulate("click", event);
  });
  test("to check paragraph tags rendered.", () => {
    expect(wrapper.find("p")).toHaveLength(2);
    expect(wrapper.find("p").at(0).text()).toMatch(
      " Enter Temprature value to Convert"
    );
    expect(wrapper.find("p").at(1).text()).toMatch("Converted Temrature");
  });
  test("to check input tag rendered.", () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper.find("input")).toHaveLength(3);
    const event = { handleRaioChange: () => {} };
    jest.spyOn(event, "handleRaioChange");
    wrapper.find("input").at(1).simulate("onMouseDown", event);
    wrapper.find("input").at(2).simulate("onMouseDown", event);
  });

  test("check for label", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });

  test("checking if input for celsious is getting rendered", () => {
    const handleRaioChange = jest.fn();
    const setRadioButton = jest.fn();
    const radioButton = "Celsius";
    expect(
      wrapper.containsMatchingElement(
        <input
          className="radioButton"
          type="radio"
          name="Celsius"
          value="Celsius"
          id="Celsius"
          checked={radioButton === "Celsius"}
          onChange={(e) => setRadioButton("Celsius")}
          onMouseDown={(e) => handleRaioChange("Celsius")}
        />
      )
    );
  });

  test("checking if input for Fahrenheit is getting rendered", () => {
    const handleRaioChange = jest.fn();
    const setRadioButton = jest.fn();
    const radioButton = "Fahrenheit";
    expect(
      wrapper.containsMatchingElement(
        <input
          className="radioButton"
          type="radio"
          name="Fahrenheit"
          value="Fahrenheit"
          id="Fahrenheit"
          checked={radioButton === "Fahrenheit"}
          onChange={(e) => setRadioButton("Fahrenheit")}
          onMouseDown={(e) => handleRaioChange("Fahrenheit")}
        />
      )
    );
  });
});
