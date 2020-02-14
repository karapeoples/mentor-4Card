import React from "react";
import tb from "../images/icon-team-builder.svg";

const TeamBuilder = () => {
	return (
		<>
			<div>
				<h1>Team Builder</h1>
				<p>Scans our talent network to create the optimal team for your project</p>
			</div>
			<div>
				<img src={tb} alt="team-builder" />
			</div>
		</>
	);
};

export default TeamBuilder;
