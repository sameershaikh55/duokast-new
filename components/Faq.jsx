import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	const faqData = [
		{
			t: "什么是Duokast？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
		{
			t: "我还需要其他流媒体工具吗？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
		{
			t: "什么是自定义RTMP？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
		{
			t: "是否支持移动实时流媒体？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
		{
			t: "最终平台的目的地是什么？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
		{
			t: "有比特率限制吗？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台",
		},
	];

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="mb-5 text-white text-center">
						<h1>经常问的问题</h1>
						<p>在这里找不到。？看看我们的帮助中心</p>
					</div>

					<div className="row gx-5">
						{faqData.map((prev, i) => {
							return (
								<div className="col-6" key={i}>
									<Accordion t={prev.t} p={prev.p} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
