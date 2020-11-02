import React from "react";
import { mount } from "enzyme";
import Img from "./Img";
import { findByTestAttr } from "../../../utils/test";

jest.mock("socket.io-client");

describe("Img", () => {
  let component;

  it("default value, render Loader", () => {
    component = setUp();
    const loader = findByTestAttr(component, "loader");
    expect(loader).toHaveLength(1);
  });

  it("state updated after loading the image", (done) => {
    const spySetIsLoaded = jest.fn();
    React.useState = (src) => [src, spySetIsLoaded];

    global.Image = class Image {
      constructor() {
        setTimeout(() => {
          this.onload();
          expect(spySetIsLoaded).toHaveBeenCalledWith(true);
          done();
        }, 0);
      }
    };

    component = setUp({ src: "test Value" });
  });
});

function setUp(props = {}) {
  const initialProps = {
    src: "",
    ...props,
  };

  return mount(<Img {...initialProps} />);
}
