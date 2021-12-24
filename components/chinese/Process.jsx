import React from "react";
import Image from "next/image";

// IMAGES
import i1 from "../../assets/images/process/i1.svg";
import i2 from "../../assets/images/process/i2.svg";
import i3 from "../../assets/images/process/i3.svg";
import i4 from "../../assets/images/process/i4.svg";

const Process = () => {
	const data = [
		{
			i: i1,
			t: "自定义品牌",
			p: "添加标识、横幅 、动态图片 以及预载视频到您的直播。",
		},
		{
			i: i2,
			t: "聊天",
			p: "查看并回复您的评论",
		},
		{
			i: i3,
			t: "多流媒体",
			p: "一台设备即可在多个平台直播",
		},
		{
			i: i4,
			t: "团队",
			p: "带领团队成员进行直播的同时，您可以专注于主持该场直播",
		},
	];

	return (
		<div className="process_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">我们提供的服务</h1>
							</div>

							<div className="row gy-5 justify-content-center">
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<div className="_card">
												<div className="d-flex justify-content-center">
													<Image className="w-100" src={prev.i} alt="" />
												</div>
												<div className={`text_content text-center px-5`}>
													<h4 className="fw-bold">{prev.t}</h4>
													<p className="mt-4">{prev.p}</p>
												</div>
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

export default Process;
