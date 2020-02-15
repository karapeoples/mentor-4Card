import React from "react";
import tb from "../images/icon-team-builder.svg";
import { Card } from "reactstrap";

const borderTop = {
	borderTop: "5px solid red",
	borderBottom: "5px solid red",

	height: "250px",
	margin: "2%",
};
const TeamBuilder = () => {
	return (
		<Card body outline color="danger" style={borderTop}>
			<div className="textDiv">
				<h1>Team Builder</h1>
				<p>Scans our talent network to create the optimal team for your project</p>
			</div>
			<div className="imgDiv">
				<img src={tb} alt="team-builder" />
			</div>
		</Card>
	);
};

export default TeamBuilder;
