// https://www.youtube.com/watch?v=l0JbuMVXaTs
// 0 hr 33' 10 ''
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; 

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

// components
import Navbar from './components/Navbar';



function App() {


  return (
    <>
      <Router>
				<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms" element={<Rooms />}>
						<Route index element={
								<main>
									<p>rooms again</p>
								</main>
							} 
						/>
						<Route path=":slug" element={<SingleRoom />} />
					</Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      
    </>
  );
}



export default App;


