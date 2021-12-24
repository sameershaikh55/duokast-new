import React from "react";


const Brand = () => {
	const logo = [
		"/images/logos/i1.svg",
		"/images/logos/i2.svg",
		"/images/logos/i3.svg",
		"/images/logos/i4.svg",
		"/images/logos/i5.svg",
		"/images/logos/i6.svg",
	];

	return (
		<div className="brand_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row gy-3 justify-content-center align-items-center gx-4 gx-md-5">
						{logo.map((prev, i) => {
							return (
								<div key={i} className="col-4 col-md-3 col-lg-2">
									<img className="w-100" src={prev} alt="" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brand;
