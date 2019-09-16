import React from 'react';
import BackgroundSlider from 'react-background-slider'
import image1 from "./redwoods.png"



/* esto es sólo un código de pruebas, su funcion es mostrar el fondo sin intervalos largos de tiempo*/
function jojo() {
  return (
    <div>
      <BackgroundSlider images={[image1]} duration={1} transition={0}/>
    </div>
  );
}

export default jojo;
