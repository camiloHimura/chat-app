import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";
jest.mock("socket.io-client");

describe("Button render", () => {
  const text = "test text";
  const spyClick = jest.fn();
  const Component = shallow(<Button text={text} onClick={spyClick} />);

  it("rendering text", () => {
    expect(Component.text()).toEqual(text);
  });

  it("calling click prop", () => {
    Component.find("button").simulate("click");
    expect(spyClick).toHaveBeenCalled();
  });
});
