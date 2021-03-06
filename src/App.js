import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import TeamBuilder from "./components/TeamBuilder";
import Karma from "./components/Karma";
import Supervisor from "./components/Supervisor";
import Calculator from "./components/Calculator";
import { Container, Col, Row } from "reactstrap";

function App() {
	return (
		<div>
			<section className="App">
				<h1>Reliable, efficient delivery</h1>
				<h3>Powered by Technology</h3>

				<p>
					Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
					successful
				</p>
			</section>
			<Container  className="components">
				<Row>
					<Col lg="12" md="12" sm="12"className="component">
						<TeamBuilder />
					</Col>
				</Row>
				<Row>
					<Col lg="6" md="12" sm="12"className="component">
						<Supervisor />
					</Col>

					<Col lg="6" md="12" sm="12"className="component">
						<Calculator />
					</Col>
				</Row>
				<Row>
					<Col lg="12" md='12' sm='12' className="component">
						<Karma />
					</Col>
				</Row>
			</Container>

			<div>
				<Footer className="component" />
			</div>
		</div>
	);
}

export default App;
