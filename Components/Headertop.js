import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';

const Headertop = () => {
  const props = useSpring({ 
    opacity: 1, 
    from: { opacity: 0 }, 
    config: { duration: 500 } 
  });

  return (
    <animated.div style={props} className='headcontent'>
      <h4>
        Welcome to Sabarish Textiles - No.1 Textiles Shop in Tamilnadu | 
        <FontAwesomeIcon icon={faPhone} /> 18000000100 | 
        <FontAwesomeIcon icon={faMessage} /> info@kanitextiles.com
      </h4>
    </animated.div>
  );
};

export default Headertop;

