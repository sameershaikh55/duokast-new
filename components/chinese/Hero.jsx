import React from "react";

// import Brand from "./Brand";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column align-items-center">
								<h1 className="color3 fw-bold text-center">
									最简单的设计和直播专业平台。
								</h1>
								<p className="mt-2 color3 fw-bold text-center">
									轻而易举即能创建滚动停止内容。
								</p>
								<button className="mt-1 bg_color2 text-white px-4 py-2 border-0 rounded-pill">
									7天免费试用
								</button>
							</div>
							<div className="hero_img mx-auto mt-4">
								<img src="/images/heroImg.svg" alt="插图" className="w-100" />
							</div>

							{/* BRANDS */}
							{/* <Brand /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
