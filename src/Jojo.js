import React from 'react';
import BackgroundSlider from 'react-background-slider'
import image1 from "./redwoods.png"
function jojo() {
  return (
    <div>
      <BackgroundSlider images={[image1]} duration={1} transition={0}/>
    </div>
  );
}

export default jojo;
