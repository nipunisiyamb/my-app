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
import PhoenixTransitBody from "./components/projects/phoenixtransit/PhoenixTransit";
import HardwarePrototyping from "./components/projects/hardwareprototyping/HardwarePrototyping";
import { BetterMobilityData } from "./components/projects/bettermobility/BetterMobilityData";
import BetterMobilityBody from "./components/projects/bettermobility/BetterMobility";
import Wizz from "./components/projects/wizz/Wizz";

import "bootstrap/dist/css/bootstrap.min.css";
import Postbits from "./components/projects/postbits/Postbits";
import Jojo from "./components/projects/jojo/Jojo";
import SWLC from "./components/projects/swlc/SWLC"
import Blip from "./components/projects/blip/Blip";
import DesignStudio from "./components/projects/designStudio/DesignStudio";

function App() {
  return (
    <Main>
      <Router>
        <Route path="/" exact component={Landing} />
        <Route
          path="/project/phoenixtransit"
          component={PhoenixTransitBody}
        ></Route>
        <Route
          path="/project/bettermobility"
          component={BetterMobilityBody}
        ></Route>
        <Route path="/project/wizz" component={Wizz}></Route>
        <Route path="/project/jojo" component={Jojo}></Route>
        <Route path="/project/swlc" component={SWLC}></Route>
        <Route path="/project/blip" component={Blip}></Route>
        <Route path="/project/design_studio" component={DesignStudio}></Route>


      </Router>
    </Main>
  );
}

export default App;
