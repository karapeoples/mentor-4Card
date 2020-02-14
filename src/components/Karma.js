import React from "react";
import karma from "../images/icon-karma.svg";

const Karma = () => {
	return (
		<>
			<div>
				<h1>Karma</h1>
				<p>Regularly evaluates our talent to ensure quality</p>
			</div>

			<div>
				<img src={karma} alt="karma" />
			</div>
		</>
	);
};

export default Karma;
