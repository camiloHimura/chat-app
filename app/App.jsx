import React, { useEffect, Suspense } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import InputHandler from "./components/InputHandler";
import { useWindoResize } from "./hooks";

const Modal = React.lazy(() => import("./components/Modal"));
const Settings = React.lazy(() => import("./components/Settings"));

function App() {
  const size = useWindoResize();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--container-max-height",
      `${size.height}px`
    );
  }, [size]);

  return (
    <div className="MyChat">
      <div className="container">
        <Nav name="My Chat" />
        <Messages />
        <InputHandler />

        <Suspense fallback={<div>Loading...</div>}>
          <Modal>
            <Settings />
          </Modal>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
