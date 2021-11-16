import React from "react";
import Layout from "../components/layout";
import AboutHero from "../components/AboutHero";
import Prices from "../components/Prices";
import Network from "../components/Network";
import Footer from "../components/Footer";
import States from "../components/States";
import UnderStates from "../components/UnderStates";
import AboutContact from "../components/AboutContact";
import PricingTable from "../components/PricingTable";

const pricing = () => {
	return (
		<>
			<Layout>
				<AboutHero pricing />
				<Prices />
				<Network />
				<PricingTable />
				<States />
				<UnderStates />
				<AboutContact />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</Layout>
		</>
	);
};

export default pricing;
