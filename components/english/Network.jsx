import React from "react";
import network from "../../assets/images/network.svg";
import Image from "next/image";

const Network = () => {
	return (
		<div className="network_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div>
								<Image className="w-100" src={network} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Network;
