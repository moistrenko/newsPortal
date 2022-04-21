import React from "react";
import "./styles.sass";

const PageTitle = (props) => {
	return (
		<div className='page-title'>
			{props.title}
		</div>
	);
};

export default PageTitle;
