import React, {useState} from 'react';
import './TennisCourt.css';

const TennisCourt = () => {
    const [pins, setPins] = useState([]);

    const placePin = (x, y) => {
        const pinPosition = {x,y};
        setPins([...pins, pinPosition]);
    };

    return (
    <div className="tennis-court">
      <div className="net"></div>
      <div className="baselineRight"></div>
      <div className="baselineLeft"></div>
      <div className="sidelineBottom"></div>
      <div className="sidelineTop"></div>
      <div className='doubleLineTop'></div>
      <div className='doubleLineBottom'></div>
      <div className='serveLineLeft'></div>
      <div className='serveLineRight'></div>
      <div className='tLine'></div>
      <div className="service-area"></div>
      <div className='serverPosition'></div>
      {pins.map((pin) => (
        <div className="pin" style={{ left: pin.x, top: pin.y }}></div>
      ))}
      
    </div>
  );
};

export default TennisCourt;