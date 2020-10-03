import React from 'react';
import PropTypes from 'prop-types';
import './Messages.css';
import Card from './../Card';
import {connect} from "react-redux";

const mapStateToProps = state => ({
  messages: state.messages,
  timeFormat: state.settings.timeFormat,
});

export function Messages(props) {
  const {messages, timeFormat} = props;

  return  <div className='messsages'>
            {messages.map((info, index) => 
              <Card 
                {...info}
                data-test='cp-card' 
                timeFormat={timeFormat}
                key={`${index}-${info.date}`}
              />
            )}
          </div>
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  timeFormat: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Messages);
