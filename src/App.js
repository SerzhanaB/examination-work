import "bootstrap/dist/css/bootstrap.css";
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Card1 from "./card1";
import Card10 from "./card10";
import Card11 from "./card11";
import Card12 from "./card12";
import Card13 from "./card13";
import Card14 from "./card14";
import Card15 from "./card15";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";
import Card6 from "./card6";
import Card7 from "./card7";
import Card8 from "./card8";
import Card9 from "./card9";
import Cards from "./cards";
import Comments from "./comments";
import Feedback from "./feedback";
import Issues from "./issues";
import Materials from "./materials";
import NavBar from "./Navbar";
import NewComment from "./NewComment";
import NewIssue from "./NewIssue";
import PageNotFound from  "./404-page"

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
            <div className="content">
            <Switch>
          
                <Route exact path="/" component={Cards}>
                  <Cards />
                </Route>
                <Route exact path="/card1">
                  <Card1 />
                </Route>
                <Route exact path="/card2">
                  <Card2 />
                </Route>
                <Route exact path="/card3">
                  <Card3 />
                </Route>
                <Route exact path="/card4">
                  <Card4 />
                </Route>
                <Route exact path="/card4">
                  <Card4 />
                </Route>
                <Route exact path="/card5">
                  <Card5 />
                </Route>
                <Route exact path="/card6">
                  <Card6 />
                </Route>
                <Route exact path="/card7">
                  <Card7 />
                </Route>
                <Route exact path="/card8">
                  <Card8 />
                </Route>
                <Route exact path="/card9">
                  <Card9 />
                </Route>
                <Route exact path="/card10">
                  <Card10 />
                </Route>
                <Route exact path="/card11">
                  <Card11 />
                </Route>
                <Route exact path="/card12">
                  <Card12 />
                </Route>
                <Route exact path="/card13">
                  <Card13 />
                </Route>
                <Route exact path="/card14">
                  <Card14 />
                </Route>
                <Route exact path="/card15">
                  <Card15 />
                </Route>
                <Route exact path="/materials" component={Materials}>
                  <Materials />
                </Route>
                <Route exact path="/feedback" component={Feedback}>
                  <Feedback />
                </Route>
                <Route path="/issues">
                  <Issues />
                </Route>
                <Route exact path="/newIssue">
                  <NewIssue />
                </Route>
                <Route exact path="/issues/comments">
                  <Comments />
                </Route>
                <Route exact path="/newComment">
                  <NewComment />
                </Route>
                <Route  component={PageNotFound} />
            </Switch>
            </div>
          </body>
        </div>
      </Router>
    );
  }
}

export default App;
