import FoodLogo from '../assets/img/logo.png';

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

export default Footer;
