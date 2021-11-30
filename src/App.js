// https://www.youtube.com/watch?v=l0JbuMVXaTs
// 0 hr 25' 10 ''
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; 

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="single-room" element={<SingleRoom />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      
    </>
  );
}



export default App;


