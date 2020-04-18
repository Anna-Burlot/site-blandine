// == Import npm
import React from "react";
import { Route } from "react-router-dom";

// == Import
import Home from "src/components/Home";
import Nav from "src/containers/Nav";
import "./styles.css";

// == Composant
const App = () => (
  <div className="app container mt-3">
    <Nav />
    <Route path="/" exact>
      <Home />
    </Route>
  </div>
);

// == Export
export default App;
