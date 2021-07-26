import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Container } from "./container";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Container />
			<Footer />
		</div>
	);
}
