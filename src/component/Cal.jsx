import { useState } from 'react'
import './Cal.css'
const netHeigh= .914; //in meter
import React from 'react'


 export const Calculator = () => { 
    const [Velocity, setVelocity] = useState(0);

    const [YPosition, setYPosition] = useState(0);
    const [YAngle, setXangle] = useState(0);
    const [YVelocity, setYVelocity] = useState(0);
    const [YAcceleration, setAcceleration] = useState(0);
    const [YPosAtNet, setYPosAtNet] = useState(0);

    const [XAngle, setXAngle] = useState(0);
    const [XVelocity, setXVelocity] = useState(0);
    const [XPosition, setXPosition] = useState(0);
    const [XPosAtNet, setXPosAtNet] = useState(0);

    const [Time, setTime] = useState(0);
    const [TimeAtNet, setTimeAtNet] = useState(0);

    //X and Y in the ground (check if it is in or out)
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    
     //Calculation

     //YVelocity = cos(YAngle) * Velocity
     ////////0 = 4.9t^2 + YVelocityt - YPosition
     // Time = (-1) * YVelocity + Math.sqrt(Math.pow(YVelocity, 2) - 4* 4.9 * (-1)*YPosition) //time it took for ball to land 

     //XVelocity = sin(YAngle) * velocity
    //DistanceItTravel = sin(89) * XVelocity // the ball travel this distance and hit the ground

                                                                  //X at net = sin(XAngle)/(sin(90 - XAngle)/11.887)
    //DistanceItTravelAtNet = Math.sqrt(Math.pow(11.887, 2) + Math.pow(sin(XAngle)/(sin(90 - XAngle)/11.887), 2) // ball travel this distance then reach the net

    
    //result of the serve

    //YPosAtNet
    //TimeAtNet = XPosAtNet / XVelocity
    //YPosAtNet = YVelocity * TimeAtNet + 4.9 * Math.pow(TimeAtNet, 2) //if <= .914  = not over the net


    //in or out       //All three need and over the net be true then the ball is IN
    //1.  11.887 <= DIstanceItTravel <= 18.745 to be in
    //2.  X = sin(XAngle)*DistanceItTravel 0 <= X <= 4.115 to be IN 

    // XLandForServe = (sin(XAngle) / (sin(90-XAngle)/18.288))
    //3.  Y = cos(XAngle)*DistanceItTravel 11.887 <= Y <= 18.745 AND Y < Math.sqrt(Math.pow(XLandForServe, 2) + Math.pow(18.288, 2))
    return(
        100
    );
 };


