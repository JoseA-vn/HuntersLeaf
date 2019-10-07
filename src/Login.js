import React, { Component } from 'react';
import {
  Form,
  Message,
  Segment,
} from 'semantic-ui-react';
/*Base de un Login para testeo.*/
class FormExampleCaptureValues extends Component {
  state = { name: '', email: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state
    switch(name) {
      case "jose":
        if (email == "jose") {
          window.location.href = "/Jose/"; 
        }
        break;
    }
  }
  render() {
    const { name, email } = this.state
    return (
      < Segment >
        <Form onSubmit={this.handleSubmit} size="mini">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <Form.Button color="facebook" fluid size="mini" content="Conectarse" />

        </Form>
        <Message size="mini">
          ¿Aún no te has registrado? <a href="#">Crear una Cuenta</a>
        </Message>
      </Segment >
    )
  }
}
export default FormExampleCaptureValues