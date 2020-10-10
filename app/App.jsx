import React, {useEffect} from 'react';

import './App.css';
import Nav from './components/Nav';
import Messages from './components/Messages';
import InputHandler from './components/InputHandler';
import Modal from './components/Modal';
import Settings from './components/Settings';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--container-max-height', `${window.innerHeight}px`);

    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--container-max-height', `${window.innerHeight}px`);
    });
  }, []);

  return <div className='MyChat'>
            <div className='container'>
              <Nav name='My Chat'/>
              <Messages/>
              <InputHandler/>
              
              <Modal>
                <Settings/>
              </Modal>
            </div>
          </div>
}

export default App;
