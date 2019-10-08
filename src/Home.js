import React from 'react';
import { Grid, Message, Segment } from 'semantic-ui-react';
import Menu from './Menu';
import Background from "./Images/BlackWood.jpg";
import Login from "./Login";

var sectionBackground = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'

}

export default () => (
    <section style={sectionBackground}>
      <Menu />
      <Grid centered>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>

          <Login />
        </Grid.Row>
      </Grid>
    </section>
);