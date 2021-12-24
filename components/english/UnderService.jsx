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
											<h1 className="color3">Be Creative</h1>
										</div>
										<div className="col-12 col-md-6">
											<p className="color3 mb-0">
												If done right, the live broadcast will be very
												beneficial. Our vision at duokast is to provide users
												with tools and resources to make live streaming simple
												and extremely effective. Our task is to solve the
												troubles of live content creators. At duokast, we are a
												passionate team and they are inspired to provide
												unparalleled products and services. Our team of
												engineers is always ready to provide you with a
												real-time streaming guide, ready to meet your needs.{" "}
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
