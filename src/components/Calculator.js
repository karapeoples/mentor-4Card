import React from "react";
import calc from "../images/icon-calculator.svg";
import { Card } from "reactstrap";

const borderTop = {
	borderTop: "5px solid blue",
	borderBottom: "5px solid blue",
	height: "250px",
	margin: "2%",
};

const Calculator = () => {
	return (
		<Card body outline color="primary" style={borderTop}>
			<div className="textDiv">
				<h1>Calculator</h1>
				<p>Uses data from past projects to provide better delivery estimates</p>
			</div>
			<div className="imgDiv">
				<img src={calc} alt="calculator" />
			</div>
		</Card>
	);
};

export default Calculator;
