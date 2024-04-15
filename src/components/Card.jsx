import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="row">
      {data.map((item, index) => (
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
              <button className="btn btn-primary">Price: ${item.price}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
