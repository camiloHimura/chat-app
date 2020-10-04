import React from 'react';
import PropTypes from 'prop-types';
import './Img.css';
import Loader from '../Loader';

function Img(props) {
  const [src, setSrc] = React.useState(null);
  
  React.useEffect(() => {
    let iImage = new Image();
    iImage.src = props.src;
    iImage.onload = () => {
      setSrc(props.src);
    }
  }, []);
  
  return <div className='contImg'>
          {src? <img data-test='img' src={src}/>: <Loader data-test='loader'/>}
        </div> 
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Img;
