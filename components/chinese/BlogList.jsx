import React from "react";
import Image from "next/image";
import blog from "../../assets/images/blog.svg";
import { GoChevronRight } from "react-icons/go";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const BlogList = () => {
	const data = [
		"Technology",
		"Business",
		"Marketing",
		"Cyber Security",
		"Gaming",
	];

	return (
		<div className="blog_list_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-md-12 mx-auto">
							<div className="row gy-5">
								<div className="col-12 col-lg-9">
									<div className="row gy-5">
										{[1, 1, 1, 1, 1, 1, 1, 1, 1].map((prev, i) => {
											return (
												<div
													className="col-12 col-sm-6 col-md-4 pointer"
													key={i}
												>
													<div className="blog_card shadow">
														<Image className="w-100" src={blog} alt="" />
														<div className="px-3 pb-3">
															<h4 className="mt-2">Lorem ipsum dolor sit</h4>
															<p className="mb-2">
																Lorem ipsum dolor sit amet, consetetur diam
																nonumy eirmod tempor
															</p>
															<div>
																<a
																	className="text-decoration-none color2 d-flex justify-content-between align-items-center"
																	href=""
																>
																	Read more <GoChevronRight fontSize="1.2rem" />
																</a>
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
								<div className="col-12 col-lg-3">
									<h3 className="fw-bold mb-4">Latest Post</h3>
									<div className="row gy-3 align-items-center gx-3">
										{[1, 1, 1, 1, 1, 1, 1].map((prev, i) => {
											return (
												<div
													key={i}
													className="col-12 col-sm-6 col-lg-12 pointer"
												>
													<div className="row">
														<div className="col-4">
															<Image className="w-100" src={blog} alt="" />
														</div>
														<div className="col-8">
															<h6 className="mb-1 fw-bold">
																Efficiently unleash cross
															</h6>
															<p className="text-secondary">20 Jun 2020 </p>
														</div>
													</div>
												</div>
											);
										})}
									</div>

									<div className="mt-5">
										<h4 className="fw-bold">Categories</h4>
										<ul className="list-unstyled">
											{data.map((prev, i) => {
												return (
													<li className="mt-3 f188 pointer" key={i}>
														{prev}
													</li>
												);
											})}
										</ul>
									</div>
								</div>

								<div className="paginate col-12 mt-5">
									<ul className="list-unstyled d-flex gap-2">
										<li>1</li>
										<li>2</li>
										<li>
											<HiOutlineArrowSmRight />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogList;
