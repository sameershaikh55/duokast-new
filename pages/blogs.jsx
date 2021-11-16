import React from "react";
import Layout from "../components/layout";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const blogs = () => {
	return (
		<Layout>
			<AboutHero blogs />
			<BlogList />
			<Footer />
		</Layout>
	);
};

export default blogs;
