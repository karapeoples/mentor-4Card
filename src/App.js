import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import TeamBuilder from "./components/TeamBuilder";
import Karma from "./components/Karma";
import Supervisor from "./components/Supervisor";
import Calculator from "./components/Calculator";


function App() {
	return (
		<section className="App">
			<div>
				<h1>Reliable, efficient delivery</h1>
				<h3>Powered by Technology</h3>

				<p>
					Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
					successful
				</p>
			</div>

			<div>
				<Supervisor />
			</div>

			<div>
				<TeamBuilder />
			</div>

			<div>
				<Karma />
			</div>

			<div>
				<Calculator />
			</div>

			<div>
				<Footer />
			</div>
		</section>
	);
}

export default App;
