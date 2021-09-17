import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const NavBar = () => {
  console.log('woo navbar is here');
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/workouts">Workout Tracker</Link>
        {/*add the route to the workout tracker page*/}
        {/* <Link>About</Link> */}
        <img src={logo} alt="healthy boy" />
        <Link className="title" to="/">
          Project Healthyboi
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
