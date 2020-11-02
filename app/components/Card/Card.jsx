import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { FormatDate, UrlValidator } from "../../utils";
import { SETTINGS } from "../../contans";
import Img from "../generals/Img";

function Card(props) {
  const { date, userName, text, isLocal, timeFormat } = props;
  const isHour12 = timeFormat === SETTINGS.TIME_12;

  return (
    <div className={`card ${!isLocal ? "external" : ""}`}>
      <div className="cont">
        <span className="metaData" data-test="metaData">
          {userName}, {FormatDate({ date, isHour12 })}
        </span>
        <div className="text">
          {UrlValidator(text) ? (
            <Img data-test="img" src={text} />
          ) : (
            <p data-test="text">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isLocal: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
};

export default Card;
