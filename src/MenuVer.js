import React from 'react';
import { Image, Menu, Button } from 'semantic-ui-react';
/*este menu es el que despliega la página principal y por el cual uno puede moverse através del resto de páginas.*/

export default () => (

  <Menu inverted icon='labeled' size='small' borderless >
    <Menu.Item>
      <Image size="mini" href="/" src={require("./Images/jeje.jpg")} />
    </Menu.Item>
    <Menu.Item>
      <Button secondary size='mini' href="/Jose/">Jose</Button>
    </Menu.Item>
    <Menu.Item>
      <Button secondary size='mini' href="/Raul/">Raul</Button>
    </Menu.Item>
    <Menu.Item>
      <Button secondary href="/users/">Registrarse</Button>
    </Menu.Item>
  </Menu>

);