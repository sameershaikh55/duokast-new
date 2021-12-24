import React from "react";
import Tooltip from "../common/Tooltip";

const Prices = () => {
	const pricing = {
		basic: [
			{
				t: "Multi-stream",
				m: "(live-stream to 20+ platforms)",
			},
			{
				t: "2 custom RTMP destinations",
				m: "(Add 2 custom rtmp urls)",
			},
			{
				t: "invite 5 guests",
				m: "(invite 3 guests on stream)",
			},
			{
				t: "background removal",
				m: "(remove background)",
			},
			{
				t: "visuals",
				m: "(gifs,images)",
			},
			{
				t: "pre-recorded video",
				m: "(upload a pre-recorded video)",
			},
			{
				t: "screen sharing",
				m: null,
			},
			{
				t: "720p resolution",
				m: "(stream in 720p)",
			},
			{
				t: "1 team member",
				m: "(add 1 team member)",
			},
			{
				t: "3 GB media storage",
				m: null,
			},
			{
				t: "Compatible with zoom, OBS and other encoders",
				m: null,
			},
		],
		professional: [
			{
				t: "Everything in basic",
				m: null,
			},
			{
				t: "Multistream",
				m: null,
			},
			{
				t: "5 custom rtmp",
				m: "(add 5 custom rtmp urls)",
			},
			{
				t: "Invite 10 guests",
				m: "(10 guests on screen)",
			},
			{
				t: "1080p full HD",
				m: "(stream in 1080p full HD)",
			},
			{
				t: "Cloud GPU",
				m: null,
			},
			{
				t: "Specialized support",
				m: null,
			},
			{
				t: "Fail safe",
				m: "(anything can go wrong during a live-stream if the browser shuts down we will keep the live-stream active for 1 minute)",
			},
			{
				t: "15 GB media storage",
				m: null,
			},
			{
				t: "4 team members",
				m: "(4 seats can be added)",
			},
		],
		commercial: [
			{
				t: "Everything in Professional +",
				m: null,
			},
			{
				t: "10 Custom RTMP",
				m: null,
			},
			{
				t: "Invite 15 guest on screen",
				m: null,
			},
			{
				t: "Dedicated support",
				m: null,
			},
			{
				t: "Cloud GPU",
				m: "(we will add a custom GPU to your account)",
			},
			{
				t: "Cloud recording",
				m: null,
			},
			{
				t: "60 GB media storage",
				m: null,
			},
			{
				t: "6 team members",
				m: "(6 seats can be added)",
			},
		],
	};

	return (
		<div className="prices_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1>Pricing</h1>
								<p className="mb-0">7-day money-back guarantee</p>

								<div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
									<div className="d-flex align-items-center mb-4">
										<p className="mb-0 me-3 color2 fw500">For individuals</p>
										<label className="switch">
											<input type="checkbox" />
											<span className="slider"></span>
										</label>
										<p className="mb-0 ms-3">For the company</p>
									</div>
									<div className="d-flex">
										<p className="mb-0">Once a month</p>
										<p className="mb-0 mx-4">Per year</p>
										<p className="mb-0 green_bg py-1 px-3 text-white rounded-pill">
											Save up to 20%
										</p>
									</div>
								</div>
							</div>

							<div className="row justify-content-center gy-5 gx-2 gx-md-5">
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card shadow-sm pt-4 pb-5 px-4">
										<p>Basic Streamer</p>
										<h3 className="mb-3">Y90/ MONTH</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.basic.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card2 pt-4 pb-5 px-4 shadow">
										<p>Professional streamer</p>
										<h3 className="mb-3">Y220/MONTH</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.commercial.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card shadow-sm pt-4 pb-5 px-4">
										<p>Commercial Streamer</p>
										<h3 className="mb-3">Y980/MONTH</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.professional.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
										</ul>
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

export default Prices;
