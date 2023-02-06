import { useState } from "react";
import logo from "../../assets/abstract.svg"
import "./navbarStyles.css";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img className="logo" src={logo} alt="logo"  />
        </a>
        

        <div className={click ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? <p>close</p> : <p>open</p>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
