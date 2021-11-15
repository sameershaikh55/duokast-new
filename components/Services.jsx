import React from "react";
import Image from "next/image";
import i1 from "../assets/images/services/i1.svg";
import i2 from "../assets/images/services/i2.svg";
import i3 from "../assets/images/services/i3.svg";
import i4 from "../assets/images/services/i4.svg";
import i5 from "../assets/images/services/i5.svg";
import i6 from "../assets/images/services/i6.svg";
import i7 from "../assets/images/services/i7.svg";
import i8 from "../assets/images/services/i8.svg";
import i9 from "../assets/images/services/i9.svg";

const Services = () => {
	const services = [
		{
			img: i1,
			t: "提高销售额",
			p: "更多的观众转化为更多的销售额！",
		},
		{
			img: i2,
			t: "中国制造",
			p: "为中国用户设计的世界级平台。",
		},
		{
			img: i3,
			t: "VR和360°多流媒体",
			p: "VR和360°多平台直播。",
		},
		{
			img: i4,
			t: "观众可以在任何设备上观看",
			p: "自适应比特率流可以让观众在任何设备上观看",
		},
		{
			img: i5,
			t: "添加自己的平台",
			p: "如果您的目标不在主页中，请添加它。",
		},
		{
			img: i6,
			t: "稳定性和可靠性",
			p: "我们重视高质量的直播。告别缓冲！",
		},
		{
			img: i7,
			t: "分析",
			p: "显示不同平台上的直播画面，以及更多画面。",
		},
		{
			img: i8,
			t: "兼容任何编码器",
			p: "您可以将Duokast与OBS或支持自定义详细信息的任何硬件编码器一起使用。",
		},
	];

	return (
		<div className="services_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="text-center">
						<h1 className="fw-bold">为什么选择duokast</h1>
						<p>你可以用一台设备向多个平台直播视频。</p>
					</div>

					<div className="row mt-1 gy-5 justify-content-center">
						{services.map((prev, i) => {
							return (
								<div key={i} className="col-3">
									<div className="service_card text-white p-4">
										<Image src={prev.img} alt="" />
										<h5 className="mt-4 fw-bold">{prev.t}</h5>
										<p className="mt-4">{prev.p}</p>
									</div>
								</div>
							);
						})}
						<div className="col-12 d-flex justify-content-center">
							<div className="service_card2 p-3 d-flex align-items-center">
								<Image src={i9} alt="" />
								<div className="text-white d-flex">
									<h5 className="mb-0 ms-3 fw-bold">简单</h5>
									<p className="mb-0 ms-4">
										我们使直播变得更容易。 直接在浏览器运行，轻松自如。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
