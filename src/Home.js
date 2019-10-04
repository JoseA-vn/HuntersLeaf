import React from 'react';
import { Grid, Message, Segment } from 'semantic-ui-react';
import Menu from './Menu';
import Background from "./Images/BlackWood.jpg";
import Login from "./Login";

var sectionBackground = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`

}

export default () => (
  <div>
    <section style={sectionBackground}>
      <Menu />
      <Grid centered columns={2}>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
        <Segment basic>
          <Grid centered columns={3}>
            <Message size="mini">
              Esta es la página principal de este módulo, su objetivo aún no es claro y sólo debiese servir
              para redireccionar hacia el resto de páginas.
        </Message>
          </Grid>
        </Segment>
        <Grid.Row>

          <Login />
        </Grid.Row>
      </Grid>
    </section>
  </div>
);