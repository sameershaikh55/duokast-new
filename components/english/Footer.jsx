import React from "react";
import logow from "../../assets/images/logow.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const list1 = [
		{
			list: [
				{
					t: "ABOUT",
					l: "",
				},
				{
					t: "Our Team",
					l: "",
				},
				{
					t: "Company",
					l: "",
				},
				{
					t: "Blog",
					l: "",
				},
				{
					t: "Agreement",
					l: "",
				},
			],
		},
		{
			list: [
				{
					t: "PLANS",
					l: "",
				},
				{
					t: "Basic Streamer",
					l: "",
				},
				{
					t: "Professional streamer",
					l: "",
				},
				{
					t: "Commercial Streamer",
					l: "",
				},
			],
		},
		{
			list: [
				{
					t: "HELP CENTER",
					l: "",
				},
				{
					t: "Contact us",
					l: "",
				},
				{
					t: "FAQ",
					l: "",
				},
			],
		},
	];

	return (
		<div className="footer_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-5">
								<div className="col-12 col-md-6">
									<Image src={logow} alt="" />
									<div className="row">
										<p className="under_logo mt-3 col-md-8">
											301 Rongle East Road, Songjiang District, Shanghai
										</p>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="row">
										{list1.map((prev, i) => {
											return (
												<div key={i} className="col-4">
													<ul className="list-unstyled">
														{prev.list.map((prev2, i2) => {
															return (
																<li key={i2} className="mt-2">
																	{(i2 !== 0 && (
																		<Link
																			className="pointer text-white text-decoration-none f18"
																			href={prev2.l}
																		>
																			{prev2.t}
																		</Link>
																	)) || <h4 className="color1">{prev2.t}</h4>}
																</li>
															);
														})}
													</ul>
												</div>
											);
										})}
									</div>
								</div>
								<div className="col-12">
									<div className="copy_write d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
										<p className="mb-0 text-white">
											2020 Copyright, All rights Reserved
										</p>
										<div className="mt-2 mt-md-0 text-white">
											[Shanghai ICP No. 2020036420]
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

export default Footer;
