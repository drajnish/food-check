import { useState } from 'react';
import { Link } from 'react-router-dom';
import FoodLogo from '../../logo.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ul className="nav">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/contact" className="link">
          <li>Contact Us</li>
        </Link>
        <Link to="/cart" className="link">
          <li>Cart</li>
        </Link>
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
