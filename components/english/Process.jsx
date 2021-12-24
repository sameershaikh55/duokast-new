import React from "react";


const Process = () => {
	const data = [
		{
			i: "/images/process/i1.svg",
			t: "Custom Branding",
			p: "Add logos, banners , images gifs and pre-loaded videos to your livestream.",
		},
		{
			i: "/images/process/i2.svg",
			t: "Chat",
			p: "View and reply to your comments",
		},
		{
			i: "/images/process/i3.svg",
			t: "Multi-streaming",
			p: "Live-stream to multiple platforms on one device",
		},
		{
			i: "/images/process/i4.svg",
			t: "Teams",
			p: "Bring in team members to conduct your live-stream while you can solely focus on hosting",
		},
	];

	return (
		<div className="process_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">WHAT WE OFFER</h1>
							</div>

							<div className="row gy-5 justify-content-center">
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<div className="_card">
												<div className="d-flex justify-content-center">
													<img className="w-100" src={prev.i} alt="" />
												</div>
												<div className="text_content text-center px-5">
													<h4 className="fw-bold">{prev.t}</h4>
													<p className="mt-4">{prev.p}</p>
												</div>
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

export default Process;
