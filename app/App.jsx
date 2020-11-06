import React, { useEffect, Suspense } from "react";
import { withQuicklink } from "quicklink/dist/react/hoc.js";

import "./App.css";
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import InputHandler from "./components/InputHandler";
import { useWindoResize } from "./hooks";

const Modal = React.lazy(() => import("./components/Modal"));
const Settings = React.lazy(() => import("./components/Settings"));

function App() {
  const size = useWindoResize();
  const options = {
    origins: [],
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--container-max-height",
      `${size.height}px`
    );
  }, [size]);

  const Info = withQuicklink(Settings, options);
  const ModalInfo = withQuicklink(Modal, options);

  return (
    <div className="MyChat">
      <div className="container">
        <Nav name="My Chat" />
        <Messages />
        <InputHandler />

        <Suspense fallback={<div>Loading...</div>}>
          <ModalInfo>
            <Info />
          </ModalInfo>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
