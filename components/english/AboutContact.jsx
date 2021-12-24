import React from "react";
import Image from "next/image";
import contact from "../../assets/images/contact.svg";

const AboutContact = () => {
	return (
		<div className="about_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="contact_container row">
								<div className="col-12 col-md-6 align-self-center text-white ps-4 ps-md-5 pt-5 pt-md-0">
									<h1 className="fw500">
										Lets start your Stream
										<br /> quickly and safely with us
									</h1>
									<p>
										Thank you for choosing Duokast! If you have any questions,
										please leave us
									</p>
									<button className="border fw6008 border-2 border-white px-4 py-2 rounded-pill bg_color1 text-white">
										Contact Us
									</button>
								</div>
								<div className="col-12 col-md-6 align-self-end">
									<div className="row">
										<div className="col-12 col-md-8 mx-auto">
											<Image className="w-100" src={contact} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContact;
