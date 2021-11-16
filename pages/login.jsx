import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const login = () => {
	return (
		<div className="sign_up_container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 col-md-12 mx-auto">
						<div className="inner_sign shadow">
							<div className="row h-100">
								<div className="col-12 py-4 col-md-8 align-self-center px-5 form_sec">
									<h1 className="fw-bold mb-4 mb-md-3">Login</h1>

									<div className="d-flex flex-column flex-md-row mb-4">
										<div className="share_ px-4 d-flex align-items-center">
											<BsFacebook color="#1877F2" fontSize="1.2rem" />
											<p className="mb-0 ms-3">Signup with Facebook</p>
										</div>
										<div className="ms-0 ms-md-3 mt-2 mt-md-0 share_ px-4 d-flex align-items-center">
											<FcGoogle fontSize="1.2rem" />
											<p className="mb-0 ms-3">Signup with Google</p>
										</div>
									</div>

									<div className="row">
										<div className="col-12">
											<div className="row gy-3">
												<div className="col-12">
													<div className="form-group">
														<label htmlFor="Your name">Name</label>
														<input type="email" className="form-control mt-1" />
													</div>
												</div>
												<div className="col-12">
													<div className="form-group">
														<label htmlFor="Your name">Password</label>
														<input type="email" className="form-control mt-1" />
													</div>
													<p className="text-end text-secondary mt-2">
														Forgot Password?
													</p>
												</div>
												<div className="col-12">
													<button className="w-100 py-3 h5 mb-0 text-white rounded-3 border-0 bg_color2">
														Login
													</button>
												</div>
												<div className="col-12">
													<p className="text-center">
														Already Have An Account?{" "}
														<a className="text-decoration-none color2" href="">
															Sign In
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-none d-md-block col-4 h-100">
									<div className="bg_color2 w-100 h-100"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
