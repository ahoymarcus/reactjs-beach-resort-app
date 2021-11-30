import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	
	
	return (
		<div>
			<Link to="/" style={{ padding:5 }} >
				Home
			</Link>
			<Link to="/rooms" style={{ padding: 5 }} >
				Rooms
			</Link>
		</div>
	);
};


export default Navbar


