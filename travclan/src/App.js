import Bidder from "./components/singleBidder"
import React, { useEffect } from "react";
import { Switch, Pagination, Stack } from '@material-ui/core';

function App() {
  var apiRes = [
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },
    {
      userId: 12,
      firstName: 'Parag',
      lastName: "Singh",
      email: "psparag1997@gmail.com",
      phone: "+918295921803",
      hasPremium: false,
      bids: [11111, 145555, 1121212]
    },

  ];

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
      <div className="toggleButton">Toogle Price<Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></div>
      {apiRes.map((data, index) => (
        <Bidder key={index} values={data} toogleState={state.checkedA}></Bidder>
      ))}

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>

    </div>
  );
}

export default App;
