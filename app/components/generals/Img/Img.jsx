import React from "react";
import PropTypes from "prop-types";
import "./Img.css";
import Loader from "../Loader";

function Img(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState("80px");
  const [imgWidth, setImgWidth] = React.useState("auto");

  React.useEffect(() => {
    let iImage = new Image();
    iImage.src = props.src;
    iImage.onload = () => {
      setIsLoaded(true);
      setImgWidth(iImage.naturalWidth);
      setAspectRatio(`${(iImage.naturalHeight / iImage.naturalWidth) * 100}%`);
    };
  }, []);

  return (
    <div
      className="contImg"
      style={{ paddingBottom: aspectRatio, width: imgWidth }}
    >
      <Loader data-test="loader" isVisible={!isLoaded} className="loader" />
      <img
        data-test="img"
        src={props.src}
        className={isLoaded ? "loaded" : ""}
      />
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Img;
