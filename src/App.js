import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";

import Card5 from "./card5";
import Card6 from "./card6";
import Card7 from "./card7";
import Card8 from "./card8";


import Card9 from "./card9";
import Card10 from "./card10";
import Card11 from "./card11";
import Card12 from "./card12";

import Card13 from "./card13";
import Card14 from "./card14";
import Card15 from "./card15";






import Cards from "./cards";
import Feedback from "./feedback";
import Issues from "./issues";
import Materials from "./materials";
import NavBar from "./Navbar";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <header className="header">
            <h1 className="display-3">Итоговая работа</h1>
          </header>
          <body>
            <nav className="nav">
              <NavBar />
            </nav>
            <Switch>
              <div className="content">
                <Route exact path="/" component={Cards}>
                  <Cards />
                </Route>
                <Route path="/card1">
                  <Card1 />
                </Route>
                <Route path="/card2">
                  <Card2 />

                  </Route>
                <Route path="/card3">
                  <Card3 />
                  </Route>
                <Route path="/card4">
                  <Card4 />

                  </Route>
                <Route path="/card4">
                  <Card4 />
                  </Route>
                <Route path="/card5">
                  <Card5 />


                  </Route>
                <Route path="/card6">
                  <Card6 />
                  </Route>
                <Route path="/card7">
                  <Card7 />

                  </Route>
                <Route path="/card8">
                  <Card8 />


                  </Route>
                <Route path="/card9">
                  <Card9 />

                  </Route>
                <Route path="/card10">
                  <Card10 />

                  </Route>
                <Route path="/card11">
                  <Card11 />

                  </Route>
                <Route path="/card12">
                  <Card12 />

                  </Route>
                <Route path="/card13">
                  <Card13 />

                  </Route>
                <Route path="/card14">
                  <Card14 />
                </Route>
                <Route path="/card15">
                  <Card15 />
                  </Route>
                <Route path="/materials" component={Materials}>
                  <Materials />
                </Route>
                <Route path="/feedback" component={Feedback}>
                  <Feedback />
                </Route>
                <Route path="/issues" component={Issues}>
                  <Issues />
                </Route>
              </div>
            </Switch>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
