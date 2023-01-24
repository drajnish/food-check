import React from 'react';
import ReactDOM from 'react-dom/client';

import FoodLogo from './logo.png';

const Logo = () => {
  return <img src={FoodLogo} alt="Logo" className="logo" />;
};

const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ousftkkaojw0itx4u3tw"
        alt="card image"
        className="card-image"
      />
      <div className="card-body">
        <h3>Restaurant Name</h3>
        <p>card tag</p>
      </div>
      <div className="card-footer">
        <span className="restaurant-rating">4.2</span>
        <span className="restaurant-address">Restaurant address</span>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Body = () => {
  return <RestaurantList />;
};

const Footer = () => {
  return (
    <div className="footer">
      <img src={FoodLogo} alt="logo" />
      <span>&#169; 2023 Good Food</span>

      <div className="social-media">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              alt="facebook"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              alt="instagram"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              alt="twitter"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

export default AppLayout;
