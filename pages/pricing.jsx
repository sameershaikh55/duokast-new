import React from "react";

import Layout from "../components/layout";

// CHINESE
import AboutHero from "../components/chinese/AboutHero";
import Prices from "../components/chinese/Prices";
import Network from "../components/chinese/Network";
import Footer from "../components/chinese/Footer";
import States from "../components/chinese/States";
import UnderStates from "../components/chinese/UnderStates";
import AboutContact from "../components/chinese/AboutContact";
import PricingTable from "../components/chinese/PricingTable";

// ENGLISH
import AboutHeroEn from "../components/english/AboutHero";
import PricesEn from "../components/english/Prices";
import NetworkEn from "../components/english/Network";
import FooterEn from "../components/english/Footer";
import StatesEn from "../components/english/States";
import UnderStatesEn from "../components/english/UnderStates";
import AboutContactEn from "../components/english/AboutContact";
import PricingTableEn from "../components/english/PricingTable";

import { useStickyState } from "../LangContext";

export default function Pricing() {
	const [mode, setMode] = useStickyState(false, "mode");

	return (
		<>
			<Layout isEnglish={mode} setIsEnglish={setMode}>
				{(mode && (
					<>
						{/* ENGLISH */}
						<AboutHeroEn pricing />
						<PricesEn />
						<NetworkEn />
						<PricingTableEn />
						<br />
						<br />
						<br />
						<br />
						<br />
						{/* <StatesEn /> */}
						<UnderStatesEn />
						<AboutContactEn />
						<br />
						<br />
						<br />
						<br />
						<br />
						<FooterEn />
						{/* ENGLISH */}
					</>
				)) || (
					<>
						{/* CHINESE */}
						<AboutHero pricing />
						<Prices />
						<Network />
						<PricingTable />
						<br />
						<br />
						<br />
						<br />
						<br />
						{/* <States /> */}
						<UnderStates />
						<AboutContact />
						<br />
						<br />
						<br />
						<br />
						<br />
						<Footer />
						{/* CHINESE */}
					</>
				)}
			</Layout>
		</>
	);
}
