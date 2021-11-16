import React from "react";
import Image from "next/image";
import greenTick from "../assets/images/greenTick.svg";
import arrow from "../assets/images/arrow.svg";

const Prices = () => {
	return (
		<div className="prices_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1>价钱</h1>
								<p className="mb-0">7天退款保证</p>

								<div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
									<div className="d-flex align-items-center mb-4">
										<p className="mb-0 me-3 color2 fw500">对于个人</p>
										<label className="switch">
											<input type="checkbox" />
											<span className="slider"></span>
										</label>
										<p className="mb-0 ms-3">对于公司</p>
									</div>
									<div className="d-flex">
										<p className="mb-0">每月一次</p>
										<p className="mb-0 mx-4">每年</p>
										<p className="mb-0 green_bg py-1 px-3 text-white rounded-pill">
											{" "}
											节省高达20％
										</p>
									</div>
								</div>
							</div>

							<div className="row gy-5 gx-2 gx-md-5">
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card shadow-sm pt-4 pb-5 px-4">
										<p>Free</p>
										<h3 className="mb-3">¥0/Year</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="d-flex align-items-center">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">5个自定义RTMP /通道</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">监控流健康</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">4K视频质量</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card2 pt-4 pb-5 px-4 shadow">
										<p>基本流光</p>
										<h3 className="mb-3">¥98/Year</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="d-flex align-items-center">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">20多个平台，可从</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">兼容任何编码器+缩放</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">2个自定义RTMP /通道</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">5小时云记录</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">监控流健康</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">兼容任何编码器+缩放</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">聊天</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">5小时云记录</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card shadow-sm pt-4 pb-5 px-4">
										<p>专业流媒体</p>
										<h3 className="mb-3">¥282/Year</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											Get Started <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="d-flex align-items-center">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">20多个平台，可从</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">兼容任何编码器+缩放</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">5个自定义RTMP /通道</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">5小时云记录</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">自适应比特率</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">监控流健康</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">聊天</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">Duokast Studio（即将推出）</span>
											</li>
											<li className="d-flex align-items-center mt-3">
												<Image src={greenTick} alt="" />{" "}
												<span className="ms-3">排程器</span>
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
