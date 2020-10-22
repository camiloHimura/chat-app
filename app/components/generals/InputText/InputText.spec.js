import React from "react";
import { shallow } from "enzyme";
import InputText from "../InputText";
import { findByTestAttr } from "../../../utils/test";
jest.mock("socket.io-client");

describe("InputText render", () => {
  let component;

  it("input type is text", () => {
    component = setUp();
    expect(findByTestAttr(component, "text").prop("type")).toBe("text");
  });
});

function setUp(props = {}) {
  const initialProps = {
    value: "",
    name: "",
    onChange: () => {},
    ...props,
  };
  return shallow(<InputText {...initialProps} />);
}
