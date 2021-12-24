import React from "react";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const Sidebar = ({ isOpen, ClickEvent, isEnglish, setIsEnglish }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				left: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ImCross onClick={ClickEvent} className="CrossBTn" />
			<ul>
				<li>
					<Link className="fw-bold" href="road" onClick={ClickEvent}>
						Home
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="" onClick={ClickEvent}>
						Family
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="" onClick={ClickEvent}>
						About
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="" onClick={ClickEvent}>
						Price
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
