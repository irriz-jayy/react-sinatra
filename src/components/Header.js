import "../App.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" activeClassName="active" exact to="/">
          <img
            src="https://raw.githubusercontent.com/irriz-jayy/portfolio_02/main/public/favicon.ico"
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
