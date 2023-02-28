import "../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://raw.githubusercontent.com/irriz-jayy/portfolio_02/main/public/favicon.ico"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
};

export default Header;
