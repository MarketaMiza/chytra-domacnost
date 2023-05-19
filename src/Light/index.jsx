import React, { useState } from "react";
import LightOff from './img/light-off.svg'
import LightOn from './img/light-on.svg'
import './style.css'

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);
  return (
    <>
      <div
        className="light"
        onClick={() =>
          lightState === "on" ? setLightState("off") : setLightState("on")
        }
      >
        <div className="light__icon">
          <img src={lightState === "on" ? LightOn : LightOff} />
        </div>
        <div className="light__name">{name}</div>
      </div>
    </>
  );
};
