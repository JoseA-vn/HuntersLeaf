import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalExampleSize extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}>Acceder</Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Acceder a la pagina</Modal.Header>
          <Modal.Content>
            <p>Esta seguro que desea acceder a la siguiente pagina?</p>
          </Modal.Content>
          <Modal.Actions>
          <Button
              positive
              icon='checkmark'
              labelPosition='left'
              content='Yes'
            />
            <Button 
                negative
                icon='close'
                labelPosition='left'
                content= 'No'
                />

          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize