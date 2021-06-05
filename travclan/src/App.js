import Bidder from "./components/SingleBidder"
import React from "react";
import { Switch as Sw } from '@material-ui/core';
import BidderProfile from './BidderProfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bidder/:id" exact component={BidderProfile} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="toggleButton">Show Highest Bids<Sw
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></div>
      <Bidder toogleState={state.checkedA}></Bidder>
    </div>
  )

}

export default App;
