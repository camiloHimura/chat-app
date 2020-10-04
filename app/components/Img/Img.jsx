import React from 'react';
import PropTypes from 'prop-types';
import './Img.css';

function Img(props) {
  const [src, setSrc] = React.useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
  );
  
  React.useEffect(() => {
    let iImage = document.createElement('img');
    iImage.src = props.src;
    iImage.onload = () => {
      setSrc(props.src);
    }
  }, []);
  
  return <div className='contImg'>
          <img data-test='img' src={src}/>
        </div> 
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Img;
