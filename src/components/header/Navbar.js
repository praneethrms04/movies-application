import { useState } from "react";
import logo from "../../assets/abstract.svg";
import "./navbarStyles.css";

const Navbar = (props) => {
  const { filterMoviesBySearch, hideSearch } = props;
  const [click, setClick] = useState(false);
  const [searchtext, setSearchText] = useState("");

  const handleClick = () => setClick(!click);

  const searchFunction = (e) => {
    e.preventDefault();
    // console.log(searchtext);
    filterMoviesBySearch(searchtext);
  };

  return (
    <>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img className="logo" src={logo} alt="logo" />
        </a>
        {hideSearch && (
          <form className="form-search" onSubmit={searchFunction}>
            <input
              type="text"
              className=""
              value={searchtext}
              placeholder="search movie"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn-search">search</button>
          </form>
        )}
        <div className={click ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/all-movies">Movies</a>
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
