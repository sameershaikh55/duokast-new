import React from "react";
import Layout from "../components/layout";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactCards from "../components/ContactCards";

const contact = () => {
	return (
		<>
			<Layout>
				<AboutHero contact />
				<ContactForm />
				<ContactCards />
				<Footer />
			</Layout>
		</>
	);
};

export default contact;
