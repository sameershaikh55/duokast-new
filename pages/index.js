import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSlider from "../components/HomeSlider";
import Network from "../components/Network";
import Prices from "../components/Prices";
import Process from "../components/Process";
import Services from "../components/Services";
import UnderService from "../components/UnderService";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<UnderService />
			<Process />
			<HomeSlider />
			<Prices />
			<Network />
			<Faq />
			<Footer />
		</>
	);
}
