import React from "react";

const AboutHero = ({ pricing, contact, blogs }) => {
	return (
		<div className="aboutHero_container position-relative">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						{(pricing && (
							<div className="col-11 col-md-12 mx-auto">
								<div>
									<h1 style={{ textAlign: "center" }} className="color3">
										选择适合您或您业务的最佳计划
									</h1>
									<div className="button_container d-flex justify-content-center mt-4">
										<button className="text-white px-4 py-2 border-0 rounded-pill">
											<div className="me-3"></div>无需卡
										</button>
										<button className="ms-3 text-white px-4 py-2 border-0 rounded-pill">
											<div className="me-3"></div>随时取消
										</button>
									</div>

									<div className="bread_content">
										<p className="color3">Home • Pricing</p>
									</div>
								</div>
							</div>
						)) ||
							(contact && (
								<div className="col-11 col-md-12 mx-auto">
									<div className="text-center">
										<h1 className="color3 fw600">
											Lets Get Started Your Stream Fast & Secure With Us
										</h1>

										<div className="bread_content">
											<p className="color3">Home • Contact</p>
										</div>
									</div>
								</div>
							)) ||
							(blogs && (
								<div className="col-11 col-md-12 mx-auto">
									<div className="text-center">
										<h1 className="color3 fw-bold">
											Know More About Our Company From Latest Blogs
										</h1>

										<div className="bread_content">
											<p className="color3">Home • Contact</p>
										</div>
									</div>
								</div>
							)) || (
								<div className="col-11 col-md-12 mx-auto">
									<div className="text-center">
										<h1 className="color3">让我们了解一下我们的公司</h1>
										<p className="mt-3 color3">
											調舎全権川勝県道初無佐人動泰掲越善足料。僕女度条受示明掲地録済科文宝注謙形。率急報文葉葉者聞芸辞向治対年孤新子財囲政。
										</p>

										<div className="bread_content">
											<p className="color3">Home • About Us</p>
										</div>
									</div>
								</div>
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
