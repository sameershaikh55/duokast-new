import React from "react";
import AboutHero from "../components/AboutHero";
import Brand from "../components/Brand";
import UnderService from "../components/UnderService";
import Layout from "../components/layout";
import AboutSec from "../components/AboutSec";
import Team from "../components/Team";
import AboutContact from "../components/AboutContact";
import Footer from "../components/Footer";

const about = () => {
	return (
		<>
			<Layout>
				<AboutHero />
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<Brand />
						</div>
					</div>
				</div>
				<UnderService about />
				<AboutSec />
				<Team />
				<AboutContact />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</Layout>
		</>
	);
};

export default about;
