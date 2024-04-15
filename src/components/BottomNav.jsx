const BottomNav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container">
          {/* <!-- Logo (Replace 'Your Logo' with your actual logo image source) --> */}
          {/* <a className="navbar-brand" href="#">
            <img src="your-logo.png" alt="Your Logo" height="40" />
          </a> */}

          {/* <!-- Navbar toggler button for mobile --> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          {/* <!-- Navbar links --> */}

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-primary mx-2">All</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary mx-2">
                  Breakfast
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary mx-2">Lunch</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary mx-2">Dinner</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
