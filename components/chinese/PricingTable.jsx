import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";

const PricingTable = () => {
	const data = [
		{
			t: "20多个平台，可从",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "兼容任何编码器+缩放",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "5个自定义RTMP /通道",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "自适应比特率",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "5小时云记录",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "监控流健康",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "聊天",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "Duokast Studio（即将推出）",
			t1: true,
			t2: true,
			t3: true,
		},
		{
			t: "排程器",
			t1: false,
			t2: true,
			t3: true,
		},
		{
			t: "专业版+",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "10个自定义RMTP /通道",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "流分析",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "Duokast Studio HD +新增功能（即将推出",
			t1: false,
			t2: false,
			t3: true,
		},
		{
			t: "专业支持",
			t1: false,
			t2: false,
			t3: true,
		},
	];

	return (
		<div className="pricing_table_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center">价钱</h1>

							<div style={{ overflowX: "auto", width: "100%" }}>
								<div className="inner_pricing_table_container container-fluid mt-5 pt-5">
									<div className="row">
										<div className="col-12">
											<table className="w-100">
												<tbody>
													<tr>
														<td className="pt-4"></td>
														<td className="pt-4 text-center">基本流光</td>
														<td className="pt-4 text-center bg_color5 text-white top_rounded">
															<button className="bg_color1 px-3 border-0 py-1 text-white rounded-pill">
																专业流媒体
															</button>
														</td>
														<td className="pt-4 text-center">商业的</td>
													</tr>
													<tr>
														<td className="pt-4 pb-1"></td>
														<td className="pt-4 pb-1 text-center h2">¥282</td>
														<td className="pt-4 pb-1 text-center bg_color5 h2 text-white">
															¥871
														</td>
														<td className="pt-4 pb-1 text-center h2">¥871</td>
													</tr>
													<tr>
														<td className="pb-5"></td>
														<td className="pb-5 text-center">Per month</td>
														<td className="pb-5 text-center bg_color5 text-white">
															Per month
														</td>
														<td className="pb-5 text-center">Per month</td>
													</tr>
													{data.map((prev, i) => {
														return (
															<tr key={i}>
																<td className="border-bottom py-2">{prev.t}</td>
																<td className="border-bottom py-2 text-center">
																	{(prev.t1 && <img src="/images/tick.svg" alt="" />) ||
																		""}
																</td>
																<td className="border-bottom py-2 text-center bg_color5 text-white">
																	{(prev.t2 && <img src="/images/tick2.svg" alt="" />) ||
																		""}
																</td>
																<td className="border-bottom py-2 text-center">
																	{(prev.t3 && <img src="/images/tick.svg" alt="" />) ||
																		""}
																</td>
															</tr>
														);
													})}
													<tr>
														<td className="pt-4"></td>
														<td className="pt-4 text-center pb-4 d-flex align-items-center justify-content-center">
															<button className="bg_color2 border-0 px-4 py-2 text-white rounded-pill d-flex align-items-center justify-content-center text-center">
																Get started{" "}
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
														<td className="pt-4 text-center pb-4 bg_color5 bottom_rounded">
															<button className="color1 bg_color3 border-0 px-4 py-2 rounded-pill">
																Get started{" "}
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
														<td className="pt-4 text-center pb-4 d-flex align-items-center justify-content-center">
															<button className="bg_color2 border-0 px-4 py-2 text-white rounded-pill d-flex align-items-center justify-content-center text-center">
																Get started{" "}
																<FiArrowRightCircle
																	fontSize="1.3rem"
																	className="ms-2"
																/>
															</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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

export default PricingTable;
