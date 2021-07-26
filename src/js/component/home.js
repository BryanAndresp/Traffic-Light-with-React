import React, { useState } from "react";

//create your first component
export function Home() {
	const [btnRed, setBtnRed] = useState("");
	const [btnYellow, setBtnYellow] = useState("");
	const [btnGreen, setBtnGreen] = useState("");

	const handleClickRed = () => {
		setBtnYellow(""), setBtnRed("glow"), setBtnGreen("");
	};

	const handleClickYellow = () => {
		setBtnYellow("glow "), setBtnRed(""), setBtnGreen("");
	};
	const handleClickGreen = () => {
		setBtnYellow(""), setBtnRed(""), setBtnGreen("glow");
	};

	return (
		<>
			<div className="bar"></div>
			<div className="traffic-light">
				<div
					onClick={handleClickRed}
					className={`light red ${btnRed}`}></div>
				<div
					onClick={handleClickYellow}
					className={`light yellow ${btnYellow}`}></div>
				<div
					onClick={handleClickGreen}
					className={`light green ${btnGreen}`}></div>
			</div>
		</>
	);
}
