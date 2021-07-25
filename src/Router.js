import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Context from "./Tests/App.context";
import Portal from "./Tests/App.portal";
import Shopping from "./Tests/App.shopping";
import Sort from "./Tests/App.sort";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/portal">Portal</Link>
            </li>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
            <li>
              <Link to="/context">Context</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/context">
            <Context />
          </Route>
          <Route path="/portal">
            <Portal />
          </Route>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route default path="/shopping">
            <Shopping />
          </Route>

          <Route default path="*">
            <Shopping />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
