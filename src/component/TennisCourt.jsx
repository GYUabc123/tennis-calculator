import React, { useState } from 'react';
import UserInput from './UserInput';
import './TennisCourt.css';

const TennisCourt = () => {
  const [pins, setPins] = useState([]);
  const [pinPosition, setPinPosition] = useState(null);

  // Function to place the pin on the court when clicked
  const placePin = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setPinPosition({ x, y });
  };

  // Callback function to update pin position based on UserInput
  const handlePinPosition = (x, y) => {
    setPinPosition({ x, y });
  };

  // Return statement moved inside the function body
  return (
    <div>
      {/* <UserInput onCalculatePosition={handlePinPosition} /> */}
      
      <div className="tennis-court" onClick={placePin}>
        <div className="net"></div>
        <div className="baselineRight"></div>
        <div className="baselineLeft"></div>
        <div className="sidelineBottom"></div>
        <div className="sidelineTop"></div>
        <div className="doubleLineTop"></div>
        <div className="doubleLineBottom"></div>
        <div className="serveLineLeft"></div>
        <div className="serveLineRight"></div>
        <div className="tLine"></div>
        <div className="service-area"></div>
        <div className="serverPosition"></div>

        {pinPosition && (
          <div
            className="pin"
            style={{
              left: `${pinPosition.x}px`,
              top: `${pinPosition.y}px`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default TennisCourt;
