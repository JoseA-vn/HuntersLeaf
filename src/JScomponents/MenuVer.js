import React from 'react';
import { Image, Menu, Button } from 'semantic-ui-react';
/*este menu es el que despliega la página principal y por el cual uno puede moverse através del resto de páginas.*/

export default () => (

  <Menu inverted icon='labeled' size='small' borderless >
    <Menu.Item>
      <Image size="mini" href="/" src={require("../Images/jeje.jpg")} />
    </Menu.Item>
    <Menu.Item>
      <Button secondary size='mini' href="/InkRecognizer/">InkRecognizer</Button>
    </Menu.Item>
    <Menu.Item>
      <Button secondary size='mini' href="/DataCatalog/">DataCatalog</Button>
    </Menu.Item>
    <Menu.Item>
      <Button secondary href="/TextAnalysis/">TextAnalysis</Button>
    </Menu.Item>
  </Menu>

);