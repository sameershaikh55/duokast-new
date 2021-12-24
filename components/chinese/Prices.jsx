import React from "react";
import Tooltip from "../common/Tooltip";

const Prices = () => {
	const pricing = {
		basic: [
			{
				t: "多流媒体",
				m: "(在20个以上的平台进行直播)",
			},
			{
				t: "2个自定义RTMP目的地",
				m: "(添加2个自定义rtmp链接)",
			},
			{
				t: "邀请5位嘉宾",
				m: "(在串流上邀请3位嘉宾)",
			},
			{
				t: "移除背景",
				m: "(移除您不喜欢的背景)",
			},
			{
				t: "视觉效果",
				m: "(动态图片、图片)",
			},
			{
				t: "预录视频",
				m: "(上传预先录制的视频)",
			},
			{
				t: "屏幕共享",
				m: null,
			},
			{
				t: "720p 分辨率",
				m: "(720p的串流)",
			},
			{
				t: "1名团队成员",
				m: "(添加1名团队成员)",
			},
			{
				t: "3GB媒体存储空间",
				m: null,
			},
			{
				t: "兼容Zoom OBS和其他编码器",
				m: null,
			},
		],
		professional: [
			{
				t: "基本串流的功能再升级",
				m: null,
			},
			{
				t: "多流媒体",
				m: null,
			},
			{
				t: "5个自定义rtmp",
				m: "(添加5个自定义rtmp链接)",
			},
			{
				t: "邀请10位嘉宾",
				m: "(10位成员同时在屏幕上)",
			},
			{
				t: "1080p全高清画质",
				m: "(1080p全高清画质串流)",
			},
			{
				t: "云GPU",
				m: null,
			},
			{
				t: "特别支持",
				m: null,
			},
			{
				t: "故障安全",
				m: "(直播过程中可能会出现任何问题，如果浏览器停止运作，我们将保留1分钟的直播活动)",
			},
			{
				t: "15GB媒体存储空间",
				m: null,
			},
			{
				t: "4名团队成员",
				m: "(可添加4个座位)",
			},
		],
		commercial: [
			{
				t: "专业串流的功能再升级",
				m: null,
			},
			{
				t: "10个自定义RTMP",
				m: null,
			},
			{
				t: "可邀请15位嘉宾加入屏幕",
				m: null,
			},
			{
				t: "专属支持",
				m: null,
			},
			{
				t: "云GPU",
				m: "(我们将添加自定义GPU至您的账户)",
			},
			{
				t: "云录制",
				m: null,
			},
			{
				t: "60GB媒体存储空间",
				m: null,
			},
			{
				t: "6名团队成员",
				m: "(可添加6个座位)",
			},
		],
	};

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
											开始 <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.basic.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card2 chinese pt-4 pb-5 px-4 shadow">
										<p>专业串流 </p>
										<h3 className="mb-3">¥220/月</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											开始 <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.commercial.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<div className="col-12 col-sm-6 col-md-4">
									<div className="price_card chinese shadow-sm pt-4 pb-5 px-4">
										<p>商业串流</p>
										<h3 className="mb-3">¥980/月</h3>
										<button className="d-flex justify-content-between align-items-center border-0 py-1 text-white rounded-3 px-3 fw-bold w-50">
											开始 <img src="/images/arrow.svg" alt="" />
										</button>

										<hr className="my-5" />

										<ul className="list-unstyled">
											{pricing.professional.map((item, i) => {
												return (
													<li key={i} className="row mt-3">
														<div className="col-2">
															<img src="/images/greenTick.svg" alt="" />
														</div>
														<div className="col-10 ps-0">
															{item.t}{" "}
															{item.m !== null && <Tooltip title={item.m} />}
														</div>
													</li>
												);
											})}
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
