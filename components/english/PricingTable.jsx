import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";

const PricingTable = () => {
	const data = [
		{
			t: "Multi-stream ( live-stream to 20+ platforms)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "2 custom RTMP destinations ( Add 2 custom rtmp urls)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "invite 5 guests ( invite 3 guests on stream)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "background removal ( remove background)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "visuals ( gifs,images)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "pre-recorded video ( upload a pre-recorded video)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "screen sharing",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "720p resolution ( stream in 720p)",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "1 team member ( add 1 team member)",
			t1: false,
			t2: true,
			t3: true,
		},
		{
			t: "3 GB media storage",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Compatible with zoom, OBS and other encoders",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Everything in basic +",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Multistream",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "5 custom rtmp( add 5 custom rtmp urls)",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Invite 10 guests ( 10 guests on screen)",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "1080p full HD ( stream in 1080p full HD)",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Cloud GPU",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Specialized support",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Fail safe",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "15 GB media storage",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "4 team members ( 4 seats can be added)",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Everything in Professional +",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "10 Custom RTMP",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Invite 15 guest on screen",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Dedicated support",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Cloud GPU( we will add a custom GPU to your account)",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Cloud recording",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "60 GB media storage",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "6 team members ( 6 seats can be added)",
			t1: false,
			t2: false,
			t3: true,
		},
	];

	return (
		<div className="pricing_table_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center">Price</h1>

							<div style={{ overflowX: "auto", width: "100%" }}>
								<div className="inner_pricing_table_container container-fluid mt-5 pt-5">
									<div className="row">
										<div className="col-12">
											<table className="w-100">
												<tbody>
													<tr>
														<td className="pt-4"></td>
														<td className="pt-4 text-center">Basic Streamer</td>
														<td className="pt-4 text-center bg_color5 text-white top_rounded">
															<button className="bg_color1 px-3 border-0 py-1 text-white rounded-pill">
																Professional streamer
															</button>
														</td>
														<td className="pt-4 text-center">
															Commercial Streamer
														</td>
													</tr>
													<tr>
														<td className="pt-4 pb-1"></td>
														<td className="pt-4 pb-1 text-center h2">Y90</td>
														<td className="pt-4 pb-1 text-center bg_color5 h2 text-white">
															Y220
														</td>
														<td className="pt-4 pb-1 text-center h2">Y980</td>
													</tr>
													<tr>
														<td className="pb-5"></td>
														<td className="pb-5 text-center">Per month</td>
														<td className="pb-5 text-center bg_color5 text-white">
															Per month
														</td>
														<td className="pb-5 text-center">Per month</td>
													</tr>
													{data.map((prev, i) => {
														return (
															<tr key={i}>
																<td className="border-bottom py-2">{prev.t}</td>
																<td className="border-bottom py-2 text-center">
																	{(prev.t1 && <img src="/images/tick.svg" alt="" />) ||
																		""}
																</td>
																<td className="border-bottom py-2 text-center bg_color5 text-white">
																	{(prev.t2 && <img src="/images/tick2.svg" alt="" />) ||
																		""}
																</td>
																<td className="border-bottom py-2 text-center">
																	{(prev.t3 && <img src="/images/tick.svg" alt="" />) ||
																		""}
																</td>
															</tr>
														);
													})}
													<tr>
														<td className="pt-4"></td>
														<td className="pt-4 text-center pb-4 d-flex align-items-center justify-content-center">
															<button className="bg_color2 border-0 px-4 py-2 text-white rounded-pill d-flex align-items-center justify-content-center text-center">
																Get started
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
														<td className="pt-4 text-center pb-4 bg_color5 bottom_rounded">
															<button className="color1 bg_color3 border-0 px-4 py-2 rounded-pill">
																Get started
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
														<td className="pt-4 text-center pb-4 d-flex align-items-center justify-content-center">
															<button className="bg_color2 border-0 px-4 py-2 text-white rounded-pill d-flex align-items-center justify-content-center text-center">
																Get started
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
													</tr>
												</tbody>
											</table>
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

export default PricingTable;
