const BottomNav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container">
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
