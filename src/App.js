import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import InkRecognizer from "./JScomponents/InkRecognizer"
import Home from "./JScomponents/Home";
import logo from "./Images/BlackWood.jpg";
import DataCatalog from './JScomponents/DataCatalog';
import TextAnalysis from './JScomponents/TextAnalysis';
import Iniciar from "./JScomponents/Iniciar";

var sectionBackground = {
  width: "100%",
  height: "147vh",
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover'

}

function Index() {
  return <Home />;
}

function JoseCall() {
  return <InkRecognizer />;
}

function Raulcall() {
  return <DataCatalog />;
}

function Users() {
  return <TextAnalysis />
}
function Inicio() {
  return <Iniciar />
}
export default () => (
  <section style={sectionBackground}>
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/InkRecognizer/" component={JoseCall} />
      <Route path="/DataCatalog/" component={Raulcall} />
      <Route path="/TextAnalysis/" component={Users} />
      <Route path="/Iniciar/" component={Inicio} />
    </Router>
  </section>
);