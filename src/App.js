import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import InkRecognizer from "./InkRecognizer"
import Home from "./Home";
import DataCalog from './DataCalog';

import TextAnalysis from './TextAnalysis';


function Index() {
  return <Home/>;
}

function JoseCall() {
  return <InkRecognizer />;
}

function Raulcall() {
  return <DataCalog />;
}

function Users() {
  return <TextAnalysis/>
}
export default () => (

  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/InkRecognizer/" component={JoseCall} />
    <Route path="/DataCalog/" component={Raulcall} />
    <Route path="/TextAnalysis/" component={Users} />
  </Router>

);