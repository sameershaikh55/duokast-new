import React from "react";
// import Image from "next/image";
// import unService from "../../assets/images/unService.svg";

const UnderService = ({ about }) => {
	return (
		<div className={`${(!about && "under_service_container") || ""}`}>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								{/* <div className="col-12">
									<button className="bg_color2 px-4 text-white border-0 py-2 rounded-pill">
										关于我们
									</button>
								</div> */}
								<div className="col-12 mt-4">
									<div className="row gy-3">
										<div className="col-12 col-md-6">
											<h1 className="color3">发挥创意</h1>
										</div>
										<div className="col-12 col-md-6">
											<p className="color3 mb-0">
												如果做对的话，直播会非常有益。我们在duokast的愿景是为用户提供工具和资源，以使直播变得简单而极为有效。我们的任务是解决直播内容创作者的烦恼问题。在duokast，我们是一个充满激情的团队，他们受到鼓舞提供无与伦比的产品和服务。我们的工程师团队随时为您提供实时流向导，随时可以满足您的需求。
											</p>
										</div>
									</div>
								</div>

								{/* <div className="col-12 mt-5">
									<Image src={unService} alt="" />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UnderService;
