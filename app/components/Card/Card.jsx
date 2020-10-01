import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const {type, date, user, text, url, isLocal} = props;

  return  <div className={`card ${!isLocal? 'external': ''}`}>
            <div>
              {text}
              {type}
              {date}
              {user}
              {url}
            </div>
          </div>
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLocal: PropTypes.bool.isRequired,
}

export default Card;
