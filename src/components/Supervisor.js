import React from "react";
import supervise from "../images/icon-supervisor";

const Supervisor = () => {
	return (
		<>
			<div>
				<h1>Supervisor</h1>
				<p>Monitors activity to identify project roadblocks</p>
			</div>
			<div>
				<img src={supervise} alt="supervisor" />
			</div>
		</>
	);
};

export default Supervisor;
