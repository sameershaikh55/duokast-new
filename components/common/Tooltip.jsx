import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Tooltip = ({ title }) => {
	return (
		<div className="tooltip">
			<FaQuestionCircle color="#00000096" />
			<span className="tooltiptext">
				<FaQuestionCircle color="#00000096" />

				{title}
			</span>
		</div>
	);
};

export default Tooltip;
