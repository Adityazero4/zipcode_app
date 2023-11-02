import React, { useState } from "react";
import ZipCodeForm from "./components/ZipCodeForm";
import LocationDisplay from "./components/LocationDisplay";
import "./App.css";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <ZipCodeForm
        setLocationData={setLocationData}
        setError={setError}
        setLoading={setLoading}
      />
      <br />
      <LocationDisplay
        locationData={locationData}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default App;
