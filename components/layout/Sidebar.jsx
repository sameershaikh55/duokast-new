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
					<Link className="fw-bold" href="/" onClick={ClickEvent}>
						Home
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="/blogs" onClick={ClickEvent}>
						Blogs
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="/about" onClick={ClickEvent}>
						About
					</Link>
				</li>
				<li>
					<Link className="fw-bold" href="/pricing" onClick={ClickEvent}>
						Price
					</Link>
				</li>
				<li className="buttons_cont">
					<button onClick={() => setIsEnglish(!isEnglish)}>
						{(isEnglish && "Chinese") || "English"}
					</button>
					<button className="ms-3">Login</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
