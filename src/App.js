// https://www.youtube.com/watch?v=l0JbuMVXaTs
// 0 hr 21' 10 ''
import React from 'react';

import './App.css'; 

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';



function App() {


  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}



export default App;


