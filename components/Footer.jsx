import React from "react";
import logow from "../assets/images/logow.svg";
import i1 from "../assets/images/footerIcons/i1.svg";
import i2 from "../assets/images/footerIcons/i2.svg";
import i3 from "../assets/images/footerIcons/i3.svg";
import i4 from "../assets/images/footerIcons/i4.svg";
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
					t: "Personal",
					l: "",
				},
				{
					t: "Business",
					l: "",
				},
				{
					t: "Premium",
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
						<div className="col-6">
							<Image src={logow} alt="" />
							<p className="under_logo mt-3 w-75">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi
							</p>
						</div>
						<div className="col-6">
							<div className="row">
								{list1.map((prev, i) => {
									return (
										<div key={i} className="col-4">
											<ul>
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
							<div className="copy_write d-flex justify-content-between">
								<p className="mb-0 text-white">2020 Copyright, All rights Reservecd</p>
								<div>
									<Image src={i1} alt="" /> <Image src={i2} alt="" />{" "}
									<Image src={i3} alt="" /> <Image src={i4} alt="" />
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
