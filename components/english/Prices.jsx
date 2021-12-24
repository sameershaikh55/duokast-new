import React from "react";
import Image from "next/image";
import greenTick from "../../assets/images/greenTick.svg";
import arrow from "../../assets/images/arrow.svg";

const Prices = () => {
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
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Multi-stream ( live-stream to 20+ platforms)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													2 custom RTMP destinations ( Add 2 custom rtmp urls)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													invite 5 guests ( invite 3 guests on stream)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													background removal ( remove background)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													visuals ( gifs,images{" "}
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													pre-recorded video ( upload a pre-recorded video)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">screen sharing</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													720p resolution ( stream in 720p)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													1 team member ( add 1 team member)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">3 GB media storage</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Compatible with zoom, OBS and other encoders
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card2 pt-4 pb-5 px-4 shadow">
										<p>Professional streamer</p>
										<h3 className="mb-3">Y220/MONTH</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Everything in basic </div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Multistream</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													5 custom rtmp( add 5 custom rtmp urls)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Invite 10 guests ( 10 guests on screen)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													1080p full HD ( stream in 1080p full HD)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Cloud GPU</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Specialized support</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Fail safe ( anything can go wrong during a live-stream
													if the browser shuts down we will keep the live-stream
													active for 1 minute )
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">15 GB media storage</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													4 team members ( 4 seats can be added)
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card shadow-sm pt-4 pb-5 px-4">
										<p>Commercial Streamer</p>
										<h3 className="mb-3">Y980/MONTH</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Everything in Professional +
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">10 Custom RTMP</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Invite 15 guest on screen
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Dedicated support</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													Cloud GPU( we will add a custom GPU to your account)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">Cloud recording</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">60 GB media storage</div>
											</li>
											<li className="row mt-3">
												<div className="col-2 mt-1">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													6 team members ( 6 seats can be added)
												</div>
											</li>
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
