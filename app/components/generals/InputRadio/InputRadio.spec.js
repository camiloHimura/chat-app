import React from "react";
import { shallow } from "enzyme";
import InputRadio from "../InputRadio";
import { findByTestAttr } from "../../../utils/test";
jest.mock("socket.io-client");

describe("Radio render", () => {
  let component;
  const values = [
    { value: "val 1", label: "label 1" },
    { value: "val 2", label: "label 2" },
    { value: "val 3", label: "label 3" },
  ];

  it("label is liked to an input by htmlFor", () => {
    component = setUp({ values, name: "testName" });
    const index = 2;

    const id = findByTestAttr(component, "radio").at(index).prop("id");
    const htmlFor = findByTestAttr(component, "label")
      .at(index)
      .prop("htmlFor");
    expect(htmlFor).toBe(id);
  });

  it("radio is checked if it's values is equal to the selectedValue", () => {
    const index = 2;
    component = setUp({
      values,
      name: "testName",
      selectedValue: values[index].value,
    });

    expect(findByTestAttr(component, "radio").at(index).prop("checked")).toBe(
      true
    );
  });

  it("render labels, input type is radio", () => {
    component = setUp({ values });

    findByTestAttr(component, "label").forEach((node, index) => {
      expect(node.text()).toBe(values[index].label);
    });

    findByTestAttr(component, "radio").forEach((node, index) => {
      expect(node.prop("type")).toBe("radio");
    });
  });
});

function setUp(props = {}) {
  const initialProps = {
    name: "",
    values: [],
    onChange: () => {},
    selectedValue: "",
    ...props,
  };
  return shallow(<InputRadio {...initialProps} />);
}
