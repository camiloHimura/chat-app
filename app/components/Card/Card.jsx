import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const {date, userName, text, url, isLocal} = props;

  return  <div className={`card ${!isLocal? 'external': ''}`}>
            <div>
              {text}
              {date}
              {userName}
              {url}
            </div>
          </div>
}

Card.propTypes = {
  date: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isLocal: PropTypes.bool.isRequired,
}

export default Card;
