import React, { useState } from "react";

// CHINESE
import Layout from "../components/layout";
import AboutHero from "../components/chinese/AboutHero";
import Footer from "../components/chinese/Footer";
import BlogList from "../components/chinese/BlogList";

// ENGLISH
import AboutHeroEn from "../components/english/AboutHero";
import FooterEn from "../components/english/Footer";
import BlogListEn from "../components/english/BlogList";

import { useStickyState } from "../LangContext";

export default function Blogs() {
	const [mode, setMode] = useStickyState(false, "mode");

	return (
		<>
			<Layout isEnglish={mode} setIsEnglish={setMode}>
				{(mode && (
					<>
						{/* ENGLISH */}
						<AboutHeroEn blogs />
						<BlogListEn />
						<FooterEn />
						{/* ENGLISH */}
					</>
				)) || (
					<>
						{/* CHINESE */}
						<AboutHero blogs />
						<BlogList />
						<Footer />
						{/* CHINESE */}
					</>
				)}
			</Layout>
		</>
	);
}
