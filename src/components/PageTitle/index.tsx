import React from "react";
import "./styles.sass";

interface IPageTitleParams {
	title: JSX.Element;
}

const PageTitle: React.FC<IPageTitleParams> = ({title}) => {
	return (
		<div className='page-title'>
			{title}
		</div>
	);
};

export default PageTitle;
