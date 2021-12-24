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
										<h1 className="color3 fw600">doukast</h1>

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
											从最新博客中了解更多关于我们公司的信息
										</h1>

										<div className="bread_content">
											<p className="color3">Home • Blogs</p>
										</div>
									</div>
								</div>
							)) || (
								<div className="col-11 col-md-12 mx-auto">
									<div>
										<h1 className="color3 text-center">
											让我们了解一下我们的公司
										</h1>
										<p className="mt-3 color3 mt-4">
											21世纪是技术革命的时代，数字领域的使用已经从社交媒体和娱乐方面扩展到在线交流和收入方式。而我们赚取收入的方式就是直播。{" "}
										</p>
										<p className="mt-3 color3">
											设置与理解直播是相当有技术含量的事，但它确实是于您的粉丝互动、分享兴趣爱好，以及变现的最佳方式。许多知名的社交媒体网红就是通过这种实时串流媒体与他们的粉丝形成联结，并进行真实的互动。{" "}
										</p>
										<p className="mt-3 color3">
											多数时候，直播需要下载多个应用程序、不同软件，而且设置起来非常困难。然而，DuoKast的愿景是简化繁琐的操作，使人人都能极为容易地操作直播和多流媒体。{" "}
										</p>
										<p className="mt-3 color3">
											DuoKast是一家以充满激情的公司，希望最大限度地减少直播时遇到的问题，并让所有人都能更方便地使用，同时也希望消除下载软件和应用程序，避免设置多个设备进行直播的麻烦。{" "}
										</p>
										<p className="mt-3 color3">
											因此，DuoKast的灵感应运而生。这是一个可以直接从浏览器上进行直播的在线直播平台。{" "}
										</p>
										<p className="mt-3 color3">
											DuoKast的团队致力于提供无与伦比的产品和服务。我们的专业团队个个都是直播能手，随时可以满足您的需求。如果操作得当的话，直播可以为您带来巨大的收益；那就是我们希望确保的一点！{" "}
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
