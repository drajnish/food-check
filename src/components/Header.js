import { useState } from 'react';
import FoodLogo from '../../logo.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
      {isLoggedIn ? (
        <button
          className="btn"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img src={FoodLogo} alt="Logo" className="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
