import React from "react";
import Image from "next/image";

// IMAGES
import i1 from "../assets/images/process/i1.svg";
import i2 from "../assets/images/process/i2.svg";
import i3 from "../assets/images/process/i3.svg";
import i4 from "../assets/images/process/i4.svg";

const Process = () => {
	const data = [
		{
			i: i1,
			t: "分析工具",
			p: "分析---显示您的直播数据。",
		},
		{
			i: i2,
			t: "多流",
			p: "多流媒体---在多个平台直播。",
		},
		{
			i: i3,
			t: "Duokast工作室",
			p: "Duokast工作室---基于浏览器的简单便捷的实时流媒体工作室。",
		},
		{
			i: i4,
			t: "聊天汇总",
			p: "聊天整合---在一个区域显示聊天界面。",
		},
	];

	return (
		<div className="process_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="fw-bold">我们提供什么</h1>
								<p>
									Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
									Accusantium Doloremque Laudantium, Totam Rem Aperiam
								</p>
							</div>

							<div className="row gy-5 mt-5 justify-content-center">
								{data.map((prev, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
											<div className={(i !== 1 && "_card") || "yellow_card"}>
												<div className="d-flex justify-content-center">
													<Image className="w-100" src={prev.i} alt="" />
												</div>
												<div
													className={`${
														i === 1 && "text-white"
													} text_content text-center px-5`}
												>
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
