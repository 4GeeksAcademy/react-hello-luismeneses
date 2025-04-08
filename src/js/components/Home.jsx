import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row justify-content-between">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;