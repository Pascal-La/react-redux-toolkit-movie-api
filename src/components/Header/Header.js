import React from "react";
// import { Link } from "react-router-dom";

// import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    // <div className="header">
    //   <Link to="/">
    //     <div className="logo">Movie Api</div>
    //   </Link>
    //   <div className="user-image">
    //     {/* <img src={user} alt="user" /> */}
    //   </div>
    // </div>

    <div className="header">
      <a href="/">
        <h2>PL</h2>
      </a>
      <h1>MOVIE API</h1>
    </div>
  );
};

export default Header;
