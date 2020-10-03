import React from 'react';
import PropTypes from 'prop-types';
import './Messages.css';
import Card from './../Card';
import {connect} from "react-redux";

const mapStateToProps = state => ({
  messages: state.messages,
});

export function Messages(props) {
  const {messages} = props;

  return  <div className='messsages'>
            {messages.map((info, index) => 
              <Card 
                {...info} 
                data-test='cp-card' 
                key={`${index}-${info.date}`}
              />
            )}
          </div>
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Messages);
