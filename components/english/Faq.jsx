import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	const faqData = [
		{
			t: "What is Duokast?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
		{
			t: "Do I need other streaming media tools?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
		{
			t: "What is custom RTMP?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
		{
			t: "Does it support mobile real-time streaming?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
		{
			t: "What is the destination of the final platform?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
		{
			t: "Is there a bit rate limit?",
			p: "Duokast is a cloud-based multi-streaming platform that allows you to stream to any number of platforms",
		},
	];

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="mb-5 text-white text-center">
								<h1>Frequently asked questions</h1>
								<p>Cannot find it here. ? Check out our help center</p>
							</div>

							<div className="row gx-5">
								{faqData.map((prev, i) => {
									return (
										<div className="col-12 col-md-6" key={i}>
											<Accordion t={prev.t} p={prev.p} />
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

export default Faq;
