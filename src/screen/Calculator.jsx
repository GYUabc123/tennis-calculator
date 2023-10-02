import { useState } from 'react'

const netHeigh= .914; //in meter
 import React from 'react'


 function Calculator() { //rfce
    const [Velocity, setVelocity] = useState(0);

    const [YPosition, setYPosition] = useState(0);
    const [YAngle, setXangle] = useState(0);
    const [YVelocity, setYVelocity] = useState(0);
    const [YAcceleration, setAcceleration] = useState(0);

    const [XAngle, setXAngle] = useState(0);
    const [XVelocity, setXVelocity] = useState(0);
    const [XPosition, setXPosition] = useState(0);

    const [Time, setTime] = useState(0);
    const [TimeAtNet, setTimeAtNet] = useState(0);


   return (
     <div>calculator</div>
     //Calculation

     //YVelocity = cos(YAngle) * Velocity
     //0 = 4.9t^2 + YVelocityt - YPosition
     // Time = (-1) * YVelocity + Math.sqrt(Math.pow(YVelocity, 2) - 4* 4.9 * (-1)*YPosition) 


   )
 }
 
 export default Calculator

