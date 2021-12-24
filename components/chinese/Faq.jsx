import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
	const faqData = [
		{
			t: "什么是Duokast？",
			p: "Duokast 允许用户直接从网络浏览器设计和直播到多个社交平台",
		},
		{
			t: "我如何连接到社交平台？",
			p: "您可以通过扫描二维码或手动输入流密钥和 URL 进行连接。",
		},
		{
			t: "我可以将 DuoKast 与其他编码器一起使用吗？",
			p: "是的，您可以使用我们的云平台通过 Zoom 或其他编码器进行多流传输。",
		},
		{
			t: "我可以用 DuoKast 做什么？",
			p: "Duokast是一个基于云的多流平台，可让您流到任意数量的平台DuoKast 为您提供了一个简单易用的云工作室，您无需学习任何复杂的流程，即可在其中设计和创建精美的直播，并在中国境内的多个社交网站和应用程序上进行直播。",
		},
		{
			t: "我的帐户会被社交平台封锁吗？",
			p: "只要您遵守终端平台的条款和条件并按照中国法律进行直播，您的帐户就不会被屏蔽。",
		},
		{
			t: "我可以直播高清吗？",
			p: "是的，您可以从我们的工作室流式传输完整的 1080p 高清视频。",
		},
		{
			t: "我可以垂直直播吗？",
			p: "是的，您可以直接从浏览器推送 1080x1920 垂直直播。",
		},
		{
			t: "支持哪些浏览器？",
			p: "目前最新版本的 Chrome 和 Firefox。",
		},
	];

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="mb-5 text-white text-center">
								<h1>经常问的问题</h1>
								<p>在这里找不到。？看看我们的帮助中心</p>
							</div>

							<div className="row gx-5">
								{faqData.map((prev, i) => {
									return (
										<div className="col-12 col-md-6" key={i}>
											<Accordion t={prev.t} p={prev.p} />
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

export default Faq;
