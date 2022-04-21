import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeNewsDetailPage } from "pages/NewsDetailPage";
import "./styles.sass";
import DateView from "components/DateView";

const NewsItem = (props) => {
	return (
		<NavLink className='news-item' to={routeNewsDetailPage(props.item._id)}>
			<div className='item-title'>
				<h3>{props.item.title}</h3>
			</div>
			<div className='bottom-wrapper'>
				<p className='source'>{props.item.clean_url}</p>
				<DateView value={props.item.published_date} />
			</div>
		</NavLink>
	);
};

export default NewsItem;
