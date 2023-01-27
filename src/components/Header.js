import FoodLogo from '../../logo.png';

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
      <img src={FoodLogo} alt="Logo" className="logo" />;
      <Navbar />
    </div>
  );
};

export default Header;
