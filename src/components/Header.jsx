import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h3 className="headerElements">
        <Link className="headerTag" to="/">
          Home
        </Link>
      </h3>
      <h3 className="headerElements">
        <Link className="headerTag" to="/products">
          Products
        </Link>
      </h3>
      <h3 className="headerElements">
        <Link className="headerTag" to="/contact">
          Contact
        </Link>
      </h3>
      <h3 className="headerElements">
        <Link className="headerTag" to="/aboutus">
          About Us
        </Link>
      </h3>
    </div>
  );
};

export default Header;
