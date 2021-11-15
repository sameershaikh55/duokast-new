import React from "react";
import network from "../assets/images/network.svg";
import Image from "next/image";

const Network = () => {
	return (
		<div className="network_container">
			<div className="page_container">
				<div className="container-fluid">
					<h1 className="mb-5 text-center">强大的duokast功能</h1>

					<div>
						<Image className="w-100" src={network} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Network;
