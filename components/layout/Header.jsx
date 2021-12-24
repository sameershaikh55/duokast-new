import React, { useEffect } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ ClickEvent, isOpen, isEnglish, setIsEnglish }) => {
	useEffect(() => {
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
				header.classList.toggle("shadow-sm", window.scrollY > 0);
			}
		});
	}, []);

	return (
		<div className="header_container">
			<div className="page_container w-100">
				<div className="container-fluid">
					<div className="d-flex align-items-center justify-content-between">
						{/* LOGO START */}
						<Link href="/">
							<div className="pointer logo_container mt-1">
								<img src="/images/logo.svg" alt="" />
							</div>
						</Link>

						<div className="d-flex align-items-center d-md-none">
							<button
								onClick={() => setIsEnglish(!isEnglish)}
								className="me-2 lang-change-mobile"
							>
								{(isEnglish && "Chinese") || "English"}
							</button>

							<GiHamburgerMenu
								onClick={ClickEvent}
								fontSize="2.5rem"
								color="#000"
							/>
						</div>

						<div className="navigation d-none d-md-block">
							<ul className="d-flex align-items-center list-unstyled mb-0">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li className="ms-4">
									<Link href="/blogs">Blogs</Link>
								</li>
								<li className="mx-4">
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/pricing">Price</Link>
								</li>
							</ul>
						</div>

						<div className="buttons_cont d-none d-md-flex">
							<button onClick={() => setIsEnglish(!isEnglish)}>
								{(isEnglish && "Chinese") || "English"}
							</button>
							<button className="ms-3">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
