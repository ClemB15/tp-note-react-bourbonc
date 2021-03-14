import React, {useEffect, useReducer} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import MarkerContext from "./contexts/MarkerContext";
import markerReducer from "./reducers/markerReducer";
import Map from "./components/Map";
import MarkersList from "./components/MarkersList";
import Users from "./components/Users";

const Home = () => {
    return <h1>Bienvenue sur la map</h1>
}
const App = () => {
    const [state, dispatch] = useReducer(markerReducer, {markers: [], user: []})
    const context = { state, dispatch }
    useEffect(() => '', [state.user])
  return (
      <MarkerContext.Provider value={context}>
      <Router>
          <div>
              <nav>
                  <Link to="/">Accueil</Link>

                  <Link to="/map">Map</Link>

                  <Link to="/markers">MarkersList</Link>

                  <Link to="/users">Users</Link>

                  <div>
                      <span>Pseudo : {state.user.name} | Mail : {state.user.mail}</span>
                  </div>
              </nav>
              <Switch>
                  <Route path="/map">
                      <Map />
                  </Route>
                  <Route path="/markers">
                      <MarkersList />
                  </Route>
                  <Route path="/users">
                      <Users />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
      </MarkerContext.Provider>
  );
}

export default App;
