import React from "react";

const ContactForm = () => {
	return (
		<div className="contact_form_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center mb-5 pb-2">
								<h1 className="color3 fw-bold">Contact Us</h1>
								<p className="color3">
									Have A Question Or Just Want To Say Hi? Wed Love To Hear From
									You.
								</p>
							</div>

							<div className="row gx-0 gx-md-5 inner_form p-4 p-md-5 gy-4 shadow bg-white rounded-3">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label htmlFor="Your name">Your name</label>
										<input
											type="email"
											className="form-control mt-1"
											placeholder="Enter your first & last name"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label htmlFor="Your name">Your email</label>
										<input
											type="email"
											className="form-control mt-1"
											placeholder="Enter your email address"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label htmlFor="Your name">Phone</label>
										<input
											type="email"
											className="form-control mt-1"
											placeholder="Enter your phone number"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label htmlFor="Your name">Subject</label>
										<input
											type="email"
											className="form-control mt-1"
											placeholder="Enter a subject line"
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label htmlFor="Your name">Message</label>
										<textarea
											rows="6"
											type="email"
											className="form-control mt-2"
											placeholder="Write your message"
										/>
									</div>
								</div>

								<div className="col-12">
									<button className="border-0 py-3 h4 text-white bg_color2 w-100 rounded-3">
										Send
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
