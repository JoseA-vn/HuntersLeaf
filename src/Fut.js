import React from 'react';
import Sky from 'react-sky';
import myImage from "./Images/pelota.png"


class App extends React.Component {
  render() {
    return (
      <div>
          
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: myImage

          }}
          how={100} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={40} /* time of the animation. Dfaults at 20s */
          size={'100px'} /* size of the rendered images. Defaults at 150px */
           /* color of background. Defaults to none */
        />
      </div>
    );
  }
}

export default App;