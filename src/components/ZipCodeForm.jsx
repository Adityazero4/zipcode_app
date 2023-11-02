import React, { useState } from "react";

const ZipCodeForm = ({ setLocationData, setError, setLoading }) => {
  const [zip, setZip] = useState("");

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true immediately

    // Simulate a loading delay using setTimeout
    setTimeout(() => {
      fetch(`https://api.zippopotam.us/in/${zip}`)
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
            throw new Error("Invalid Zipcode, please try again");
          }
          return response.json();
        })
        .then((data) => {
          setLocationData(data);
          setError(null);
          setLoading(false);
        })
        .catch((error) => {
          setLocationData(null);
          setError(error.message);
          setLoading(false);
        });
    }, 1000); // Delay for 1 second (you can adjust the duration as needed)
  };

  const clearInput = () => {
    setZip("");
  };

  return (
    <div>
      <section className="hero hero-body is-info container is-fullhd ">
        <h1
          className="title"
          style={{
            color: "white",
          }}
        >
          India Location Info
        </h1>
        <h2
          className="subtitle"
          style={{
            color: "white",
          }}
        >
          Enter a Zipcode to get Location Info
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                className="input zip is-medium"
                type="text"
                placeholder="Enter Zipcode"
                value={zip}
                onChange={handleZipChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-map-pin"></i>
              </span>
              {zip && (
                <span className="icon is-small is-right">
                  <button
                    className="delete is-medium"
                    onClick={clearInput}
                  ></button>
                </span>
              )}
            </div>
          </div>
          <div
            className="field"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="control">
              <button className="button is-primary is-medium">Search</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ZipCodeForm;
