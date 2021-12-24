import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Tooltip = ({ title }) => {
	return (
		<div className="tooltip_custom">
			<FaQuestionCircle color="#00000096" />
			<span className="tooltiptext">{title}</span>
		</div>
	);
};

export default Tooltip;
