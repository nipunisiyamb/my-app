import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/sections/landing/Landing";
import Portfolio from "./components/sections/portfolio/Portfolio";
import SparkBody from "./components/projects/spark/SparkBody";

import { Route, BrowserRouter as Router, Link, match } from "react-router-dom";
import OpenScienceBody from "./components/projects/opendesign/OpenScience";
import { Main } from "./theme/Styles";
import TMOBody from "./components/projects/tmobile/tmoBody";
import DreamDronesBody from "./components/projects/dreamdrones/DreamDrones";
import PhoenixTransitBody from "./components/projects/phoenixtransit/PhoenixTransit";
import HardwarePrototyping from "./components/projects/hardwareprototyping/HardwarePrototyping";
import { BetterMobilityData } from "./components/projects/bettermobility/BetterMobilityData";
import BetterMobilityBody from "./components/projects/bettermobility/BetterMobility";
import Wizz from "./components/projects/wizz/Wizz";

import "bootstrap/dist/css/bootstrap.min.css";
import Postbits from "./components/projects/postbits/Postbits";

function App() {
  return (
    <Main>
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/project/spark" component={SparkBody} />
        <Route
          path="/project/opensciencehardware"
          component={OpenScienceBody}
        ></Route>
        <Route path="/project/tmobile" component={TMOBody}></Route>
        <Route path="/project/dreamdrones" component={DreamDronesBody}></Route>
        <Route
          path="/project/phoenixtransit"
          component={PhoenixTransitBody}
        ></Route>

        <Route
          path="/project/prototyping"
          component={HardwarePrototyping}
        ></Route>

        <Route
          path="/project/bettermobility"
          component={BetterMobilityBody}
        ></Route>

        <Route path="/project/wizz" component={Wizz}></Route>

        <Route path="/project/postbits" component={Postbits}></Route>
      </Router>
    </Main>
  );
}

export default App;
