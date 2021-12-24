import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, isEnglish, setIsEnglish }) => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Header
				ClickEvent={OnClick}
				isOpen={isOpen}
				isEnglish={isEnglish}
				setIsEnglish={setIsEnglish}
			/>
			{children}
		</>
	);
};

export default Layout;
