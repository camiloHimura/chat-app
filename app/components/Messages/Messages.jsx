import React from 'react';
import PropTypes from 'prop-types';
import './Messages.css';
import Card from './../Card';

function Messages(props) {
  const messages = [
    {type: 'text', date: Date.now(), user: 'guest', isLocal: true, text: '6 test text', url: ''},
    {type: 'text', date: Date.now(), user: 'guest', isLocal: false, text: '5 test text', url: 'https://w.wallha.com/ws/9/QsK4Si81.jpg'},
    {type: 'text', date: Date.now(), user: 'guest', isLocal: true, text: '4 test text', url: ''},
    {type: 'text', date: Date.now(), user: 'guest', isLocal: true, text: '3 test text', url: ''},
    {type: 'text', date: Date.now(), user: 'guest', isLocal: false, text: '2 test text', url: ''},
    {type: 'text', date: Date.now(), user: 'guest', isLocal: true, text: '1 test text', url: ''},
  ];

  return  <div className='messsages'>
            {messages.map((info, index) => <Card key={`${index}-${info.date}`} {...info} />)}
          </div>
}

Messages.propTypes = {
  
}

export default Messages;
