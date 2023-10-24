import { useState } from "react";


export const Lightbulb = () => {
  // Initialize the state for on/off
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    setLight(light ? false : true )
    console.log("Clicked", light);
  };

 const lightState = light ? "lightbulb on" : "lightbulb off"

  return (
    <div className="lightbulb-container">
      <div className={lightState} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
