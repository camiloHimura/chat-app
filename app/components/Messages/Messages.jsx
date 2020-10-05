import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Messages.css';
import Card from './../Card';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  messages: state.messages,
  timeFormat: state.settings.timeFormat,
});

export function Messages(props) {
  const {messages, timeFormat} = props;
  const contMessages = React.useRef(null);

  useEffect(() => {
    const container = contMessages.current;
    const scrollHeight = container.scrollHeight
    const scrollTop = (container.clientHeight + container.scrollTop);

    const lastChild = container.lastElementChild;
    
    const isBottom = scrollTop === scrollHeight;
    if (!isBottom && lastChild) {
      lastChild.scrollIntoView({behavior: "smooth", block: "start"});
    }

  }, [messages]);

  function getDivMargin() {
    return Number(getComputedStyle(document.documentElement).getPropertyValue('--gPadding').trim().replace('px', ''))
  }

  return  <div className='messages' ref={contMessages}>
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
