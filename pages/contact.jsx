import React from "react";

import Layout from "../components/layout";

// CHINESE
import AboutHero from "../components/chinese/AboutHero";
import Footer from "../components/chinese/Footer";
import ContactForm from "../components/chinese/ContactForm";
// import ContactCards from "../components/chinese/ContactCards";

// ENGLISH
import AboutHeroEn from "../components/english/AboutHero";
import FooterEn from "../components/english/Footer";
import ContactFormEn from "../components/english/ContactForm";
// import ContactCardsEn from "../components/english/ContactCards";

import { useStickyState } from "../LangContext";

const Contact = () => {
	const [mode, setMode] = useStickyState(false, "mode");

	return (
		<>
			<Layout isEnglish={mode} setIsEnglish={setMode}>
				{(mode && (
					<>
						{/* ENGLISH */}
						<AboutHeroEn contact />
						<ContactFormEn />
						{/* <ContactCardsEn /> */}
						<FooterEn />
						{/* ENGLISH */}
					</>
				)) || (
					<>
						{/* CHINESE */}
						<AboutHero contact />
						<ContactForm />
						{/* <ContactCards /> */}
						<Footer />
						{/* CHINESE */}
					</>
				)}
			</Layout>
		</>
	);
};

export default Contact;
