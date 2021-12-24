import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	const faqData = [
		{
			t: "What is DuoKast?",
			p: "Duokast allows users to design and live-stream to multiple social platforms directly from a web-browser",
		},
		{
			t: "How do I connect to the social platforms?",
			p: "You can connect through scanning a QR code or manually inputting the stream key and URL.",
		},
		{
			t: "Can I use DuoKast with other encoders?",
			p: "Yes, You can use our cloud platform to multi-stream with Zoom or other encoders.",
		},
		{
			t: "What can I do with DuoKast?",
			p: "DuoKast provides you with an easy to use cloud studio where you can design and create a beautiful live-stream without having to learn any complex process, and live-stream on multiple social sites and apps within China. ",
		},
		{
			t: "Will my account get blocked by the social platforms?",
			p: "As long as you adhere to the terms and conditions of the end platform and conduct the live-stream according to laws of China , your account should not be blocked.",
		},
		{
			t: "Can I live stream HD ?",
			p: "Yes, you can stream Full 1080p Hd video from our Studio.",
		},
		{
			t: "Can I live-stream in vertical ?",
			p: "Yes , you can push a 1080x1920 vertical live-stream directly from the browser.",
		},
		{
			t: "What browsers are supported ?",
			p: "Currently the latest version  Chrome and Firefox.",
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
