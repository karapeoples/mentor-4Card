import React from "react";
import calc from "../images/icon-calculator.svg";

const Calculator = () => {
	return (
		<>
			<div>
				<h1>Calculator</h1>
				<p>Uses data from past projects to provide better delivery estimates</p>
			</div>
			<div>
				<img src={calc} alt="calculator" />
			</div>
		</>
	);
};

export default Calculator;
