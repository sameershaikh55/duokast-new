import React from "react";
import Image from "next/image";
import i1 from "../assets/images/logos/i1.svg";
import i2 from "../assets/images/logos/i2.svg";
import i3 from "../assets/images/logos/i3.svg";
import i4 from "../assets/images/logos/i4.svg";
import i5 from "../assets/images/logos/i5.svg";
import i6 from "../assets/images/logos/i6.svg";

const Brand = () => {
	const logo = [i1, i2, i3, i4, i5, i6];

	return (
		<div className="brand_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row align-items-center gx-5">
						{logo.map((prev, i) => {
							return (
								<div key={i} className="col-2">
									<Image className="w-100" src={prev} alt="" />
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
