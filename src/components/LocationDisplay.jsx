import React from "react";

const LocationDisplay = ({ locationData, error, loading }) => {
  const addStyle = {
    color: "#A7F7F4",
  };
  if (loading) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="output">
          <i
            className="fas fa-spinner fa-spin"
            style={{
              fontSize: "48px",
            }}
          ></i>{" "}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div id="output">
          <div className="message is-danger">
            <div className="message-body">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  if (locationData) {
    const places = locationData.places;
    return (
      <div className="container">
        <div id="output">
          {places.map((place, index) => (
            <div key={index} className="message is-primary">
              <div className="message-header">
                <p>Location Info</p>
              </div>
              <div className="message-body">
                <div className="columns">
                  <div className="column">
                    <p>
                      <strong>City: </strong>
                      {place["place name"]}
                    </p>
                    <p>
                      <strong>State: </strong>
                      {place.state}
                    </p>
                  </div>
                  <div className="column">
                    <p>
                      <strong>Longitude: </strong>
                      {place.longitude}
                    </p>
                    <p>
                      <strong>Latitude: </strong>
                      {place.latitude}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default LocationDisplay;
