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
											节省高达20％
										</p>
									</div>
								</div>
							</div>

							<div className="row justify-content-center gy-5 gx-2 gx-md-5">
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card chinese shadow-sm pt-4 pb-5 px-4">
										<p>基本串流</p>
										<h3 className="mb-3">¥90/ 月</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											开始 <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													多流媒体 (在20个以上的平台进行直播)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													2个自定义RTMP目的地 (添加2个自定义rtmp链接)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													邀请5位嘉宾 (在串流上邀请3位嘉宾)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													移除背景 (移除您不喜欢的背景)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													视觉效果 (动态图片、图片col-10)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													预录视频 (上传预先录制的视频)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">屏幕共享col-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													720p 分辨率 (720p的串流col-10)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													1名团队成员 (添加1名团队成员)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													3GB媒体存储空间 col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													兼容Zoom、OBS和其他编码器col-10
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card2 chinese pt-4 pb-5 px-4 shadow">
										<p>专业串流 </p>
										<h3 className="mb-3">¥220/月</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											开始 <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													基本串流的功能再升级col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">多流媒体col-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													5个自定义rtmp (添加5个自定义rtmp链接)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													邀请10位嘉宾 (10位成员同时在屏幕上)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													1080p全高清画质(1080p全高清画质串流)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">云GPUcol-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">特别支持col-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													故障安全
													(直播过程中可能会出现任何问题，如果浏览器停止运作，我们将保留1分钟的直播活动)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													15GB媒体存储空间col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													4名团队成员 (可添加4个座位)
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card chinese shadow-sm pt-4 pb-5 px-4">
										<p>商业串流</p>
										<h3 className="mb-3">¥980/月</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											开始 <Image src={arrow} alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											<li className="row">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													专业串流的功能再升级col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">10个自定义RTMPcol-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													可邀请15位嘉宾加入屏幕col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">专属支持col-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													云GPU (我们将添加自定义GPU至您的账户)
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">云录制col-10 </div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													60GB媒体存储空间col-10
												</div>
											</li>
											<li className="row mt-3">
												<div className="col-2">
													<Image src={greenTick} alt="" />
												</div>
												<div className="col-10 ps-0">
													6名团队成员 (可添加6个座位)
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
