
import React, { useState, useEffect } from "react";
import Maps from "./Maps";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css"
import axios from "axios";
import "tailwindcss/tailwind.css";
import "leaflet/dist/leaflet.css";
import "chart.js/auto";

// import "chart.js/dist/chart.css";

const Dashboard = () => {
  
  const [lineGraphData, setLineGraphData] = useState({});

  const fetchWorldData = async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    return response.data;
  };

  

  

  const fetchHistoricalData = async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.data;
  };

  const { data: worldData } = useQuery("worldData", fetchWorldData);
  const { data: historicalData } = useQuery("historicalData", fetchHistoricalData);

  useEffect(() => {
    if (historicalData) {
      const data = {
        labels: Object.keys(historicalData.cases),
        datasets: [
          {
            label: "Confirmed Cases",
            data: Object.values(historicalData.cases),
            fill: false,
            borderColor: "#f44336",
          },
          {
            label: "Recovered Cases",
            data: Object.values(historicalData.recovered),
            fill: false,
            borderColor: "#4caf50",
          },
          {
            label: "Deaths",
            data: Object.values(historicalData.deaths),
            fill: false,
            borderColor: "#607d8b",
          },
        ],
      };
      setLineGraphData(data);
    }
  }, [historicalData]);

  return (
    <div className="container mx-auto">
              <h1 style={{background:"aqua",textAlign:"center",height:"auto",marginTop:"0px",padding:"10px"}}>Charts and Maps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Worldwide Cases</h2>
          {worldData ? (
            <div className="flex items-center" style={{ display:"flex", justifyContent: "space-evenly"}}>
              <div className="w-1/3"   >
                <p className="text-gray-500" >Total Cases:</p>
                <h3 className="text-3xl font-bold text-yellow-600">
                  {worldData.cases.toLocaleString()}
                </h3>
              </div>
              <div className="w-1/3">
                <p className="text-gray-500">Recovered:</p>
                <h3 className="text-3xl font-bold text-green-600">
                  {worldData.recovered.toLocaleString()}
                </h3>
              </div>
              <div className="w-1/3">
                <p className="text-gray-500">Deaths:</p>
                <h3 className="text-3xl font-bold text-red-600">
                  {worldData.deaths.toLocaleString()}
                </h3>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
       
       <div>
       <Maps/>
       </div>
        
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Worldwide Cases (Historical)</h2>
          {lineGraphData.labels ? (
            <Line data={lineGraphData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
