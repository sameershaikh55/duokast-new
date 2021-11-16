import React from "react";
import heroImg from "../assets/images/heroImg.svg";
import Image from "next/image";
import Brand from "./Brand";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column align-items-center">
								<h1 className="color3 fw-bold text-center">
									随时随地直播, 提高您的浏览量
								</h1>
								<p className="mt-2 color3 fw-bold text-center">
									Duokast 允许你同时在多个平台上进行流媒体直播
								</p>
								<button className="mt-1 bg_color2 text-white px-4 py-2 border-0 rounded-pill">
									3天免费试用
								</button>
							</div>
							<div className="hero_img mx-auto mt-4">
								<Image src={heroImg} alt="" />
							</div>

							{/* BRANDS */}
							<Brand />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
