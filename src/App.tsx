import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { DetailScore, MainMatches } from './Screens';

const App = () => {
  return(
    <Router>
      <Route exact path="/" render={() => <MainMatches />} />
      <Route exact path="/live-cricket-scores/:matchID/:matchName" render={() => <DetailScore />} />
      {/* <Route path="*" render={() => <p>404</p>} /> */}
    </Router>
  );
}

export default App;