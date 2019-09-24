import React from 'react';
import {Image, Menu, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jose from "./Jose"
import Home from "./Home";
import Raul from './Raul';
/*este menu es el que despliega la página principal y por el cual uno puede moverse através del resto de páginas.*/
function Index() {
  return <Home/>;
}

function JoseCall() {
  return <Jose/>;
}

function Raulcall() {
  return <Raul/> ;
}

function Users() {
  return <h2></h2>;
}

export default () => (

  <Router>
    <Menu inverted compact icon='labeled' size='tiny' borderless >
      <Menu.Item>
        <Image size="mini"  href="/" src={require("./jeje.jpg")} />
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
    <Route path="/" exact component={Index} />
    <Route path="/Jose/" component={JoseCall} />
    <Route path="/Raul/" component={Raulcall} />
    <Route path="/users/" component={Users} />
  </Router>
  
);