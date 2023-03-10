import "../App.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" activeClassName="active" exact to="/">
          <img
            src="https://bit.ly/3SyrLQe"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Jayy's Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/new-blog"
              >
                New Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeclassname="active"
                to="/edit-blog"
              >
                Edit blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
