import React from "react";


const Team = () => {
	const data = [
		{
			i: "/images/team/i1.svg",
			t: "David Martin",
			p: "Founder & CTO",
		},
		{
			i: "/images/team/i2.svg",
			t: "Mark Henricks",
			p: "Creative Director",
		},
		{
			i: "/images/team/i3.svg",
			t: "David Martin",
			p: "Design Head",
		},
		{
			i: "/images/team/i4.svg",
			t: "David Martin",
			p: "Software Engineer",
		},
		{
			i: "/images/team/i5.svg",
			t: "David Martin",
			p: "Founder & CTO",
		},
		{
			i: "/images/team/i6.svg",
			t: "Mark Henricks",
			p: "Creative Director",
		},
		{
			i: "/images/team/i7.svg",
			t: "David Martin",
			p: "Design Head",
		},
		{
			i: "/images/team/i8.svg",
			t: "David Martin",
			p: "Design Head",
		},
	];

	return (
		<div className="team_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
									<div className="text-center color3">
										<h1>认识我们的团队</h1>
										<p className="mt-3">
											Leverage Agile Frameworks To Provide A Robust Synopsis For
											High Level Overviews. Iterative Approaches To Corporate
											Strategy.
										</p>
									</div>
								</div>
							</div>

							<div className="row gy-5 mt-1">
								{data.map((prev, i) => {
									return (
										<div className="col-6 col-md-4 col-lg-3" key={i}>
											{(i + 2 > data.length && (
												<div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
													<h5 className="fw600">
														Interested to become part of team ?
													</h5>
													<a className="color1 fw600" href="">
														View opening
													</a>
												</div>
											)) || (
												<>
													<img className="w-100" src={prev.i} alt="" />
													<h5 className="fw600 mt-2 mb-0">{prev.t}</h5>
													<p className="color4">{prev.p}</p>
												</>
											)}
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

export default Team;
