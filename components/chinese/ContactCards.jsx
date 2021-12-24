import React from "react";


const ContactCards = () => {
	const data = [
		{
			i: "/images/contactIcons/i1.svg",
			t: "Help & support",
			p: (
				<p className="f20">
					Email{" "}
					<a
						className="text-decoration-none color2"
						href="mailto:support@duokast.com"
					>
						support@duokast.com
					</a>{" "}
					<br />
					for help with a current product or service or refer to FAQs and
					developer tools
				</p>
			),
		},
		{
			i: "/images/contactIcons/i2.svg",
			t: "Call us",
			p: (
				<p className="f20">
					Call us to speak to a member of our team. <br />{" "}
					<a className="text-decoration-none color2" href="tel:+578305045885">
						+ 578 305 045 885
					</a>
					<br />
					<a className="text-decoration-none color2" href="tel:+781300047853">
						+ 781 300 047 853
					</a>
				</p>
			),
		},
		{
			i: "/images/contactIcons/i3.svg",
			t: "Fax",
			p: (
				<p className="f20">
					Get in touch with Assembly for media resources.
					<br />
					<a
						className="text-decoration-none text-info"
						href="mailto:support@duokast.com"
					>
						support@duokast.com
					</a>
				</p>
			),
		},
	];

	return (
		<div className="contact_card_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-5">
								{data.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 col-sm-6 col-md-4 card_contact"
										>
											<img src={prev.i} alt="" />
											<h5 className="fw-bold mt-4 mb-3">{prev.t}</h5>
											{prev.p}
										</div>
									);
								})}
							</div>

							<div className="mt-4">
								<button className="border-0 bg_color1 px-5 py-3 h5 rounded-pill text-white">
									Support Center
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCards;
