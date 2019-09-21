import React from 'react';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import image1 from "./redwoods.png"
import Menu from './Menu';
import {Grid} from 'semantic-ui-react'
/*esta página es la base y lo único que debe contener es el menú y el fondo*/ 
function App() {
  return (
    <div>
      <BackgroundSlider images={[image1]} duration={2} transition={3}/>
      <div>
        <Grid columns={1}>
            <Grid.Row>
              <Menu/>
            </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
