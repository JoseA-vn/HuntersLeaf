import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jose from "./Jose"
import Home from "./Home";
import Raul from './Raul';

function Index() {
  return <Home/>;
}

function JoseCall() {
  return <Jose />;
}

function Raulcall() {
  return <Raul />;
}

function Users() {
  return <h2></h2>;
}
export default () => (

  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/Jose/" component={JoseCall} />
    <Route path="/Raul/" component={Raulcall} />
    <Route path="/users/" component={Users} />
  </Router>

);