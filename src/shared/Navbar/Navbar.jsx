import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              banquee.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item px-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item dropdown px-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Compare
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Support
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" aria-disabled="true">
                    Blog
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className="login mx-5">
                  Login
                </div>
                <button className="btn btn-outline-success" type="submit">
                  Open Account
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
