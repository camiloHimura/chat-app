import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import InputHandler from "./components/InputHandler";

function App(){
  
  return <div className="MyChat">
            <div className="container">
              <Nav name="My Chat"/>
              <Messages/>
              <InputHandler/>
            </div>
          </div>
}

export default App;
