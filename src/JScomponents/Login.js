import React, { Component } from 'react';
import { Form, Message, Segment } from 'semantic-ui-react';

class FormExampleCaptureValues extends Component {
  //  state = { todos : [] }
  state = { name: '', email: '' }
  /*  datos(){
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then((json) => {this.setState({todos : json}) 
      console.log(this.state.todos)})
      .catch(console.log)
    }*/


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state
    switch (name) {
      case "jose":
        if (email == "jose") {
          window.location.href = "/InkRecognizer/";
        }
        break;
    }
  }
  render() {
    const { name, email } = this.state
    return (
      < Segment size="huge">
        <Form onSubmit={this.handleSubmit}>
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
        <Message size="small">
          Email= jose<br></br>
          Password = jose
        </Message>
      </Segment >
    )
  }
}
export default FormExampleCaptureValues