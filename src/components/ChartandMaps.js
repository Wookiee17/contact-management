import axios from "axios";

import { Marker, Popup } from "react-leaflet"
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "./map";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';

const Dashboard = () => {
	const [countriesData, setCountriesData] = useState([]);
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		axios(
			"https://disease.sh/v3/covid-19/countries"
		)
			.then((res) => {
				const data = res.data
				setCountriesData(data);
			})
	}, []);

	useEffect(() => {
		axios.get(
			"https://disease.sh/v3/covid-19/historical/all?lastdays=all"
		).then((res) => {
			const data = res.data
			const newChartData = {
				labels: Object.keys(data.cases),
				datasets: [
					{
						label: "Cases",
						data: Object.values(data.cases),
						fill: false,
						borderColor: "#f50057",
						tension: 0.2,
					},
				],
			};
			setChartData(newChartData);
		})

		ChartJS.register(
			CategoryScale,
			LinearScale,
			PointElement,
			LineElement,
			Title,
			Tooltip,
			Legend
		);

	}, []);


	return (
		<div className=" container brdr mt-3 pt-5" >
			<p className="h1 d-flex justify-content-center">Corona Cases Chart</p>
			<div className="brdr-gray p-1" >

				{
					chartData.datasets ?
						<Line data={chartData} /> : <h1 className="">Loading...</h1>
				}

			</div>
			<p className="h1 d-flex justify-content-center">Corona Cases World Map</p>
			<div className="brdr container" id="">
				<MapContainer
					center={[25.59, 85.13]}
					zoom={4}
					scrollWheelZoom={true}
					className=""
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<WorldMap countriesData={countriesData} />
				</MapContainer>
			</div>
		</div>
	);
};

export default Dashboard;


