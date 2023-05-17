
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Maps() {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const countries = data.map((country) => {
          return {
            name: country.country,
            coordinates: [country.countryInfo.lat, country.countryInfo.long],
            active: country.active,
            recovered: country.recovered,
            deaths: country.deaths,
          };
        });
        console.log(countries)
        setMapData(countries);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);
 console.log(mapData)
  return (
    <div className="container mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : mapData.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">World Map</h2>
          {console.log(mapData.length)}
          <div className="h-80">
            <MapContainer scrollWheelZoom={false} style={{ width: "100%", height: "500px" }} center={[51.505, -0.09]} zoom={13}>
            {console.log("MapContainer rendered!")}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              {mapData.map((country) => (
                
                <Marker key={country.name} position={country.coordinates}>
                  <Popup>
                    <div>
                      <h2 className="text-lg font-bold mb-2">{country.name}</h2>
                      <p className="text-sm text-gray-500 mb-1">Active: {country.active.toLocaleString()}</p>
                      <p className="text-sm text-gray-500 mb-1">Recovered: {country.recovered.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">Deaths: {country.deaths}</p>
                    </div>
                  </Popup>
                </Marker>)
              )}
            </MapContainer>
          </div>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>)
      }
    export default Maps;
