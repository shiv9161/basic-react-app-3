import { useState, useEffect } from "react";

const SearchExample = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = jsonData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* search */}
        <div className="row">
          {filteredData.map((item, index) => (
            <div className="col-sm-2" key={index}>
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={item.image}
                  style={{ width: "100%" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary">
                    Price: ${item.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* search end */}
      </div>
    </>
  );
};

export default SearchExample;
