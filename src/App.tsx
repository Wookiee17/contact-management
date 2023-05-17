import Header from "./components/header";
import ContactForm from "./components/contactform";
import Sidebar from "./components/sidebar";
import Contacts from "./components/contactlist";
import EditContact from "./components/editDetails";
import Dashboard from "./components/ChartandMaps";
import { Routes, Route } from "react-router-dom";
import Test from "./test"

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<Routes >
				<Route path="/" element={<Contacts />} />
				<Route path="/contact_form" element={<ContactForm />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/edit/:id" element={<EditContact />} />
			</Routes>
		</div>
	);
}
// {/* <Header />
// 			<div className=" container-fluid row">
// 				<div className="side1 col-4 brdr position-fixed">
// 					<Sidebar />
// 				</div>
// 				<div className="side2 col brdr position-relative">
// 					<Routes >
// 						<Route path="/" element={<Contacts />} />
// 						<Route path="/contact_form" element={<ContactForm />} />
// 						<Route path="/dashboard" element={<Dashboard />} />
// 						<Route path="/edit/:id" element={<EditContact />} />
// 					</Routes>
// 				</div>
// 			</div> */}

export default App;
