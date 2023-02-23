import { useState } from 'react';
import { Link } from 'react-router-dom';
import FoodLogo from '../assets/img/logo.png';
import useOnline from '../utils/useOnline';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
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
      {!isOnline && <span>Looks like you are offline!</span>}
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
