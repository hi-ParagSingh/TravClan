import Bidder from "./components/SingleBidder"
import React, { useEffect } from "react";
import { Switch } from '@material-ui/core';



function App() {
  
 
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    fetch(
      `https://intense-tor-76305.herokuapp.com/merchants%60`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        // apiRes = response;
      })
  }, []);

  return (
    <div className="App">
      <div className="toggleButton">Show Highest Bids<Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></div>
      <Bidder toogleState={state.checkedA}></Bidder>
    </div>
  );
}

export default App;
