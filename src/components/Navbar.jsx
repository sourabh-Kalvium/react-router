import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/bag">Bag</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/login">Login</Link>    
    </nav>
  );
};

export default Navbar;