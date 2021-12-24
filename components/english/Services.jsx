import React from "react";
import Image from "next/image";
import i1 from "../../assets/images/services/i1.svg";
import i2 from "../../assets/images/services/i2.svg";
import i3 from "../../assets/images/services/i3.svg";
import i4 from "../../assets/images/services/i4.svg";
import i5 from "../../assets/images/services/i5.svg";
import i6 from "../../assets/images/services/i6.svg";
import i7 from "../../assets/images/services/i7.svg";
import i8 from "../../assets/images/services/i8.svg";
import i9 from "../../assets/images/services/i9.svg";

const Services = () => {
	const services = [
		{
			img: i1,
			t: "Invite guests",
			p: "You can bring in participants to join your livestream",
		},
		{
			img: i2,
			t: "Easily Brand your livestream",
			p: "Create call to actions with banners add your logo and overlays.",
		},
		{
			img: i3,
			t: "Multi-stream",
			p: "Live-stream to multiple platforms with one device",
		},
		{
			img: i4,
			t: "Engagement",
			p: "With our chat feature you can read and reply to viewers ",
		},
		{
			img: i5,
			t: "Invite participants",
			p: "Simply by sending an invite link you can invite guest into your live-stream",
		},
		{
			img: i6,
			t: "Teams",
			p: "Invite team members to co-host a stream.",
		},
		{
			img: i7,
			t: "NO more downloads",
			p: "Downloading software is a thing of the past.",
		},
		{
			img: i8,
			t: "Stream full HD",
			p: "Stream in full HD from our studio or in 4K from OBS",
		},
	];

	return (
		<div className="services_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">Why Choose Duokast?</h1>
							</div>

							<div className="row mt-1 gy-5 justify-content-center">
								{services.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<div className="service_card text-white p-4">
												<Image src={prev.img} alt="" />
												<h5 className="mt-4 fw-bold">{prev.t}</h5>
												<p className="mt-4">{prev.p}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
