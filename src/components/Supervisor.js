import React from "react";
import supervise from "../images/icon-supervisor.svg";
import { Card } from "reactstrap";

const borderTop = {
	borderTop: "5px solid cyan",
	borderBottom: "5px solid cyan",
	height: "250px",
	margin: "2%",
};
const Supervisor = () => {
	return (
		<Card body outline color="info" style={borderTop}>
			<div className="textDiv">
				<h1>Supervisor</h1>
				<p>Monitors activity to identify project roadblocks</p>
			</div>
			<div className="imgDiv">
				<img src={supervise} alt="supervisor" />
			</div>
		</Card>
	);
};

export default Supervisor;
