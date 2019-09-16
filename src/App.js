import React from 'react';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import image1 from "./redwoods.png"
import Menu from './Menu';
import Login from './Login';
import {Grid} from 'semantic-ui-react'

function App() {
  return (

    <div>
      <BackgroundSlider images={[image1]} duration={3} transition={8}/>
      <div>
        <Grid columns={1}>
            <Grid.Row>
              <Menu/>
            </Grid.Row>

            <Grid.Row>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
