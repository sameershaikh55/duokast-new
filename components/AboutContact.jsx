import React from "react";
import Image from "next/image";
import contact from "../assets/images/contact.svg";

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
										让我们开始你的 <br /> 与我们一起快速安全地串流
									</h1>
									<p>感谢您选择Duokast！如有任何疑问，请给我们留言</p>
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
