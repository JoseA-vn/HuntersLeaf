import React from 'react';
import {Image, Menu, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Jojo from "./Jojo"
import Login from "./Login"
import App from "./App"

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <Login/>;
}

function Users() {
  return <h2>Users</h2>;
}

export default () => (

      <Router>
            <Menu inverted compact icon='labeled' size='tiny' borderless >
              <Menu.Item>
                <Image size="mini"  href="/" src={require("./jeje.jpg")} />
              </Menu.Item>
              <Menu.Item>
                <Button secondary size='mini' href="/about/">Conectarse</Button>
              </Menu.Item>
             <Menu.Item>
              <Button secondary href="/users/">Registrarse</Button>
             </Menu.Item>
             </Menu>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />

    </Router>
  
);