const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container">
          {/* <!-- Logo (Replace 'Your Logo' with your actual logo image source) --> */}
          <a className="navbar-brand" href="#">
            <b>F.Z</b>
          </a>

          {/* <!-- Search form --> */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
