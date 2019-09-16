import React from 'react';
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
} from 'semantic-ui-react';
import AnimatedBg from "react-animated-bg";
/*esto está solo de base para pruebas al igual que Jojo.js*/
export default () => (
  
  <Grid centered columns={3}>
    <Grid.Column>
    <Grid centered columns={2}>
      <AnimatedBg colors={["#EFF166" , "#D68C11 ","#FF0000 "]} duration={3} delay={0} timingFunction="ease-out" className="section-styles">
        Realice Aquí Su Conexión
      </AnimatedBg>
    </Grid>
      <Segment>
        <Form size="mini">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="facebook" fluid size="mini">
            Conectarse
          </Button>
        </Form>
      </Segment>
      <Message size="mini">
        ¿Aún no te has registrado? <a href="#">Crear una Cuenta</a>
      </Message>
    </Grid.Column>
  </Grid>
);