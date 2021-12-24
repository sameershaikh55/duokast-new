import React from "react";

const AboutHero = ({ pricing, contact, blogs }) => {
	return (
		<div className="aboutHero_container position-relative">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						{(pricing && (
							<div className="col-11 col-md-12 mx-auto">
								<div>
									<h1 style={{ textAlign: "center" }} className="color3">
										Choose the best plan for you or your business
									</h1>
									<div className="button_container d-flex justify-content-center mt-4">
										<button className="text-white px-4 py-2 border-0 rounded-pill">
											<div className="me-3"></div>No card required
										</button>
										<button className="ms-3 text-white px-4 py-2 border-0 rounded-pill">
											<div className="me-3"></div>Cancel anytime
										</button>
									</div>

									<div className="bread_content">
										<p className="color3">Home • Pricing</p>
									</div>
								</div>
							</div>
						)) ||
							(contact && (
								<div className="col-11 col-md-12 mx-auto">
									<div className="text-center">
										<h1 className="color3 fw600">doukast</h1>

										<div className="bread_content">
											<p className="color3">Home • Contact</p>
										</div>
									</div>
								</div>
							)) ||
							(blogs && (
								<div className="col-11 col-md-12 mx-auto">
									<div className="text-center">
										<h1 className="color3 fw-bold">
											Know More About Our Company From Latest Blogs
										</h1>

										<div className="bread_content">
											<p className="color3">Home • Blogs</p>
										</div>
									</div>
								</div>
							)) || (
								<div className="col-11 col-md-12 mx-auto">
									<div>
										<h1 className="text-center color3">About Us</h1>
										<p className="mt-4 color3">
											The 21st century is the age of technological revolution.
											The use of the digital realm has expanded from social
											media and entertainment to online communication and income
											methods. One great method is Livestreaming.
										</p>
										<p className="mt-3 color3">
											Live streaming is quite technical to set up and
											understand, but it is a great way to communicate with your
											fans, share your interests, and monetize to earn money.
											Many famous social media Influencers rely on this
											real-time streaming to form connections with their fans
											and interact genuinely.
										</p>
										<p className="mt-3 color3">
											Most of the time, Live streaming demands multiple app
											downloads, different software and is extremely difficult
											to set up. However, DuoKast wants to simplify and make
											live streaming and multi-streaming extremely accessible.
										</p>
										<p className="mt-3 color3">
											DuoKast is a passion-led company that wants to minimize
											the hassle around live streaming and make it more
											accessible and easier for all. The hassle of downloading
											software, apps and then setting up multiple devices to
											Livestream was something that they wanted to eliminate.{" "}
										</p>
										<p className="mt-3 color3">
											Hence, came the inspiration for DuoKast. An online live
											stream platform can be accessed and allows streaming
											straight from the browser.{" "}
										</p>
										<p className="mt-3 color3">
											DuoKast is a group of driven individuals committed to
											providing unrivalled products and services. Our experts
											are live streaming geniuses that are always ready to match
											your requirements. Livestreaming can be very rewarding if
											done right; we want to ensure that’s a given!{" "}
										</p>

										<div className="bread_content">
											<p className="color3">Home • About Us</p>
										</div>
									</div>
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
