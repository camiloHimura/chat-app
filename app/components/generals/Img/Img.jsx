import React from "react";
import PropTypes from "prop-types";
import "./Img.css";
import Loader from "../Loader";

function Img(props) {
  const [src, setSrc] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    let iImage = new Image();
    iImage.src = props.src;
    iImage.onload = () => {
      setSrc(props.src);
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="contImg">
      {src ? (
        <img data-test="img" src={src} style={{ opacity: isLoaded ? 1 : 0 }} />
      ) : (
        <Loader data-test="loader" isVisible={!isLoaded} />
      )}
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Img;
