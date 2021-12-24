import React from "react";


const Services = () => {
	const services = [
		{
			img: "/images/services/i1.svg",
			t: "邀请嘉宾",
			p: "您可以邀请参与者一同加入您的直播",
		},
		{
			img: "/images/services/i2.svg",
			t: "轻松打造您的直播",
			p: "创建带有横幅的行动号召，添加您的标识和叠加内容。",
		},
		{
			img: "/images/services/i3.svg",
			t: "多流媒体",
			p: "一台设备即可在多个平台直播 ",
		},
		{
			img: "/images/services/i4.svg",
			t: "参与度",
			p: "利用聊天功能，即可阅读和回复观众的评论",
		},
		{
			img: "/images/services/i5.svg",
			t: "邀请参与者",
			p: "只需发送一个链接，即可邀请嘉宾加入您的直播",
		},
		{
			img: "/images/services/i6.svg",
			t: "团队",
			p: "邀请团队成员共同主持一个直播。",
		},
		{
			img: "/images/services/i7.svg",
			t: "不需下载更多软件",
			p: "下载软件已经是猴年马月的事了。",
		},
		{
			img: "/images/services/i8.svg",
			t: "高画质直播",
			p: "从我们的演播室全高清播放或从OBS播放4K画质的影音",
		},
	];

	return (
		<div className="services_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">为什么选择Duokast?</h1>
							</div>

							<div className="row mt-1 gy-5 justify-content-center">
								{services.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<div className="service_card text-white p-4">
												<img src={prev.img} alt="" />
												<h5 className="mt-4 fw-bold">{prev.t}</h5>
												<p className="mt-4">{prev.p}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
