import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useSelector((state: any) => state.cart);
  return (
    <>
      <nav className="navbar nav-container">
        <Link className="nav-brand" to="/">
          <span>vastra</span>
        </Link>
        <Link className="nav-link" to="/shop">
          <div className="nav-option" title="Shop">
            <span className="nav-option1"></span>
            <span className="nav-option2" title="Products">
              Shop
            </span>
          </div>
        </Link>
        <Link className="nav-link" to="/cart">
          <div className="nav-bag" title="Your Bag">
            <i className="nav-option1 fa fa-bag-shopping"></i>
            <span className="nav-option2 bag-count">{cart.length}</span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
