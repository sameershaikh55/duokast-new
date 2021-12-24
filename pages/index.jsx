import React from "react";

// CHINESE
import Faq from "../components/chinese/Faq";
import Footer from "../components/chinese/Footer";
import Hero from "../components/chinese/Hero";
import HomeSlider from "../components/chinese/HomeSlider";
import Network from "../components/chinese/Network";
import Prices from "../components/chinese/Prices";
import Process from "../components/chinese/Process";
import Services from "../components/chinese/Services";
import UnderService from "../components/chinese/UnderService";

// ENGLISH
import FaqEn from "../components/english/Faq";
import FooterEn from "../components/english/Footer";
import HeroEn from "../components/english/Hero";
import HomeSliderEn from "../components/english/HomeSlider";
import NetworkEn from "../components/english/Network";
import PricesEn from "../components/english/Prices";
import ProcessEn from "../components/english/Process";
import ServicesEn from "../components/english/Services";
import UnderServiceEn from "../components/english/UnderService";

import Layout from "../components/layout";

import { useStickyState } from "../LangContext";

export default function Home() {
	const [mode, setMode] = useStickyState(false, "mode");

	return (
		<>
			<Layout isEnglish={mode} setIsEnglish={setMode}>
				{(mode && (
					<>
						{/* ENGLISH */}
						<HeroEn />
						<ServicesEn />
						<UnderServiceEn />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<ProcessEn />
						<HomeSliderEn />
						<PricesEn />
						<NetworkEn />
						<FaqEn />
						<FooterEn />
						{/* ENGLISH */}
					</>
				)) || (
					<>
						{/* CHINESE */}
						<Hero />
						<Services />
						<UnderService />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<Process />
						<HomeSlider />
						<Prices />
						<Network />
						<Faq />
						<Footer />
						{/* CHINESE */}
					</>
				)}
			</Layout>
		</>
	);
}
