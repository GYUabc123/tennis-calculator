import React, {useState} from 'react';
import './TennisCourt.css';

const TennisCourt = () => {
    const [pins, setPins] = useState([]);

    const placePin = (event) => {
      const{clientX, clientY} = event.nativeEvent;
        const pinPosition = {x:clientX, y: clientY};
        setPins([pinPosition]);
        console.log({pinPosition});
    };

    return (
    <div className="tennis-court" onClick={placePin}>
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
        <div className="pin" key={pin.x + pin.y} style={{ left: pin.x - 472, top: pin.y-165 }}></div>
      ))}
      
    </div>
  );
};

export default TennisCourt;