import React from 'react'
import "./UserInput.css"
import "./Cal.css"
import {useEffect, useState} from 'react';



const UserInput = ()=> {
    
    const [showMassage, setShowMassage] = useState(false);
    const [result, setResult] = useState(false);
        
    //const [Velocity, setVelocity] = useState(0);

    var Velocity = 0;
    //const [YPosition, setYPosition] = useState(0);
    var YPosition = 0;
    //const [YAngle, setYAngle] = useState(0);
    var YAngles = 0;
    //const [XAngle, setXAngle] = useState(0);
    var XAngles = 0;

    const handleCalculator = (event) => { 
      event.preventDefault();

      //setVelocity(v.value);
      Velocity = v.value / 60 / 60 * 1600;
      //setXAngle(XDegree.value);
      XAngles = XDegree.value;
      //setYAngle(YDegree.value);
      YAngles = YDegree.value;
      //setYPosition(height.value);
      YPosition = height.value;

      //YVelocity = Math.sin(YDegree.value) * Velocity
      var YVelocity = Math.sin((YAngles*Math.PI) / 180) * Velocity;
      console.log("Vy ", YVelocity);
      console.log("Hi", YPosition);


      //XVelocity = cos(YAngle) * velocity
      var XVelocity = Math.cos((YAngles*Math.PI) /180) * Velocity;
      console.log("Vx", XVelocity);


      // Time = (-1) * YVelocity + Math.sqrt(Math.pow(YVelocity, 2) - 4* 4.9 * (-1)*YPosition) / (2*4.9) //time it took for ball to land 
      var Time = ((-1) * YVelocity + Math.sqrt(Math.pow(YVelocity,2) - 4* 4.9 * (-1)*YPosition)) / (2*4.9);
      console.log("Time it take for the ball to hit the ground", Time);

      var PositionHitGround = Time * XVelocity;
      console.log("Ball travel this disitance then hit the ground", PositionHitGround);

          // XLandForServe = (sin(XAngle) / (sin(90-XAngle)/18.288))
      let XAXA = (Math.sin(XAngles * Math.PI / 180) / (Math.sin((90-XAngles) * Math.PI /180) / 18.288));
      console.log("X land for serve (X-asix)", XAXA );
      


      //X at net = sin(XAngle)/(sin(90 - XAngle)/11.887)
      let XPosAtNet = (Math.tan(XAngles * Math.PI / 180)) * 11.887;
      console.log("XAtNet", XPosAtNet);

      //Distance It Travel At Net = Math.sqrt(Math.pow(11.887, 2) + Math.pow(sin(XAngle)/(sin(90 - XAngle)/11.887), 2) // ball travel this distance then reach the net
      let DistanceBallTravelToNet = Math.sqrt(Math.pow(11.887, 2) + Math.pow(XPosAtNet, 2));
      console.log("DistanceBallTravelToNet", DistanceBallTravelToNet);


      //Y's Position At the Net
    //TimeAtNet = DistanceBallTravelToNet / XVelocity
    //YPosAtNet = YVelocity * TimeAtNet + 4.9 * Math.pow(TimeAtNet, 2) //if <= .914  = not over the net
    
      let TimeAtNet = DistanceBallTravelToNet / XVelocity;
      let YPosAtNet = YPosition - (YVelocity * TimeAtNet + 4.9 * Math.pow(TimeAtNet, 2)); // need to be <.914 to be over the net
      console.log("time at net", TimeAtNet);
      console.log("Y at net", YPosAtNet);

    //X and Y in the ground (check if it is in or out)
      var X = 0;
      var Y;
      
      //Calculation   DONE
      //YVelocity = Math.sin(YDegree.value) * Velocity;
      
      ////////0 = 4.9t^2 + YVelocity*t - YPosition    DONE
      // Time = (-1) * YVelocity + Math.sqrt(Math.pow(YVelocity, 2) - 4* 4.9 * (-1)*YPosition) / (2*4.9) //time it took for ball to land 

      //XVelocity = cos(YAngle) * velocity DONE

      //Done
    //DistanceItTravel = time * XVelocity // the ball travel this distance and hit the ground

    //Done                                                       //X at net = sin(XAngle)/(sin(90 - XAngle)/11.887)
    //DistanceItTravelAtNet = Math.sqrt(Math.pow(11.887, 2) + Math.pow(sin(XAngle)/(sin(90 - XAngle)/11.887), 2) // ball travel this distance then reach the net

    
    //result of the serve

    //YPosAtNet
    //TimeAtNet = XPosAtNet / XVelocity
    //YPosAtNet = YVelocity * TimeAtNet + 4.9 * Math.pow(TimeAtNet, 2) //if <= .914  = not over the net


    //in or out       //All three need and over the net be true then the ball is IN
    //1.  11.887 <= DIstanceItTravel <= 18.745 to be in
    //2.  X = sin(XAngle)*DistanceItTravel    0 <= X <= 4.115 to be IN 

    // XLandForServe = (sin(XAngle) / (sin(90-XAngle)/18.288)) Done
    //3.  Y = cos(XAngle)*DistanceItTravel    11.887 <= Y <= 18.745 AND Y < Math.sqrt(Math.pow(XLandForServe, 2) + Math.pow(18.288, 2))
      
      setShowMassage(true);
    }

    return (
      <div className = "userIn" id="userIn" >
        <form id="userInFrom" onSubmit={handleCalculator}>
          <input className="textBox" type="text" placeholder="Hit Point (height in meter)" id = "height" required/>
          <input className="textBox" type="text" placeholder="X-degree" id = "XDegree" required/>
          <input className='textBox' type="text" placeholder="velocity (mph)" id = "v" required/>
          <input className="textBox" type="text" placeholder="Y-degree" id = "YDegree" required/>
          <input type="submit"/>
        </form>
  
        {showMassage? <h1>Your serve is: {result ? " in" : " out"}</h1> : ""}
      
      </div>
      
    );
}

  export default UserInput;
