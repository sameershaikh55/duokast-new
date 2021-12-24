import React from "react";
import Layout from "../components/layout";

// CHINESE
import AboutHero from "../components/chinese/AboutHero";
import Network from "../components/chinese/Network";
import UnderService from "../components/chinese/UnderService";
// import AboutSec from "../components/chinese/AboutSec";
// import Team from "../components/chinese/Team";
import AboutContact from "../components/chinese/AboutContact";
import Footer from "../components/chinese/Footer";

// ENGLISH
import AboutHeroEn from "../components/english/AboutHero";
import NetworkEn from "../components/english/Network";
import UnderServiceEn from "../components/english/UnderService";
// import AboutSecEn from "../components/english/AboutSec";
// import TeamEn from "../components/english/Team";
import AboutContactEn from "../components/english/AboutContact";
import FooterEn from "../components/english/Footer";

import { useStickyState } from "../LangContext";

export default function About() {
	const [mode, setMode] = useStickyState(false, "mode");

	return (
		<>
			<Layout isEnglish={mode} setIsEnglish={setMode}>
				{(mode && (
					<>
						{/* ENGLISH */}
						<AboutHeroEn />
						<br />
						<br />
						{/* <div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<BrandEn />
								</div>
							</div>
						</div> */}
						<UnderServiceEn about />

						<br />
						<br />
						<br />
						<NetworkEn />
						<br />
						<br />
						<br />
						{/* <AboutSecEn /> */}
						{/* <TeamEn /> */}
						<AboutContactEn />
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
						<AboutHero />
						<br />
						<br />
						{/* <div className="container-fluid">
							<div className="row">
								<div className="col-11 col-md-12 mx-auto">
									<Brand />
								</div>
							</div>
						</div> */}
						<UnderService about />

						<br />
						<br />
						<br />
						<Network />
						<br />
						<br />
						<br />

						{/* <AboutSec /> */}
						{/* <Team /> */}
						<AboutContact />
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
