import React from "react";
import PropTypes from "prop-types";
import "./Img.css";
import Loader from "../Loader";

function Img(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    let iImage = new Image();
    iImage.src = props.src;
    iImage.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <div className="contImg">
      {isLoaded ? (
        <img data-test="img" src={props.src} style={{ opacity: 1 }} />
      ) : (
        <Loader data-test="loader" isVisible={true} />
      )}
    </div>
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Img;
