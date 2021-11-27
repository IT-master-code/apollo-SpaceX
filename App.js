import React from "react";
import "./App.css";
import Details from "./Details";
import AllMissions from "./AllMissions";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AllMissions />
      <Details />
      <Router>
        <Routes>
          <Route exact path="allmissions" component={AllMissions} />
          <Route exact path="details/:id" component={Details} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
