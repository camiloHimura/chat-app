import React from "react";
import { shallow } from "enzyme";
import { InputHandler } from "./InputHandler";
import { findByTestAttr } from "../../utils/test";
jest.mock("socket.io-client");

const addMessage = jest.fn();
//2020-10-03, 16:13:36
const dateNow = 1601734416154;
Date.now = jest.fn().mockReturnValue(dateNow);

describe("InputHandler render", () => {
  let component;
  const text = "mock test";
  const preventDefault = jest.fn();
  React.useRef = jest.fn();

  beforeEach(() => {
    addMessage.mockRestore();
    preventDefault.mockRestore();
    React.useRef.mockReturnValue({
      current: { value: text, innerText: text, focus: () => {} },
    });
  });

  //Todo Move to useEnhancedEnter test
  /*   it("shortcut: false, Enter, send the message", () => {
    component = setUp({ shortcut: false, addMessage });

    const textArea = findByTestAttr(component, "text");
    textArea.simulate("keyDown", { keyCode: KEY_ENTER, preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(addMessage).toHaveBeenCalled();
  });

  it("shortcut: true, ctrlKey + Enter, send the message", () => {
    component = setUp({ shortcut: true, addMessage });

    const textArea = findByTestAttr(component, "text");
    textArea.simulate("keyDown", {
      keyCode: KEY_ENTER,
      ctrlKey: true,
      preventDefault,
    });
    expect(preventDefault).toHaveBeenCalled();
    expect(addMessage).toHaveBeenCalled();
  });

  it("shortcut: true, Command + Enter, send the message", () => {
    component = setUp({ shortcut: true, addMessage });

    const textArea = findByTestAttr(component, "text");
    textArea.simulate("keyDown", {
      keyCode: KEY_ENTER,
      metaKey: true,
      preventDefault,
    });
    expect(preventDefault).toHaveBeenCalled();
    expect(addMessage).toHaveBeenCalled();
  }); */

  it("click send, send the message", () => {
    const userName = "name test";
    component = setUp({ addMessage, userName });

    const button = findByTestAttr(component, "btn-send");
    button.simulate("click");
    expect(addMessage).toHaveBeenCalledWith({
      text,
      userName,
      isLocal: true,
      date: dateNow,
    });
  });

  it("empty text, no message sended", () => {
    const userName = "name test";
    React.useRef = jest.fn().mockReturnValue({
      current: { value: "", innerText: "", focus: () => {} },
    });
    component = setUp({ addMessage, userName });

    const button = findByTestAttr(component, "btn-send");
    button.simulate("click");
    expect(addMessage).not.toHaveBeenCalled();
  });
});

function setUp(props = {}) {
  const initialProps = {
    userName: "",
    shortcut: true,
    timeFormat: "",
    addMessage: () => {},
    ...props,
  };
  return shallow(<InputHandler {...initialProps} />);
}
