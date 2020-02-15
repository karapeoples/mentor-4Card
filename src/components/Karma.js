import React from "react";
import karma from "../images/icon-karma.svg";
import { Card } from 'reactstrap';

const borderTop = {
	borderTop: '5px solid orange',
	borderBottom: '5px solid orange',
	width: '120%',
	height: '250px',
	marginLeft: '-10%',
}

const Karma = () => {
	return (
		<Card body outline color="warning" style={borderTop}>
			<div className="textDiv">
				<h1>Karma</h1>
				<p>Regularly evaluates our talent to ensure quality</p>
			</div>

			<div className='imgDiv'>
				<img src={karma} alt="karma" />
			</div>
		</Card>
	);
};

export default Karma;
