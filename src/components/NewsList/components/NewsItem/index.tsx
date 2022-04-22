import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeNewsDetailPage } from "pages/NewsDetailPage";
import "./styles.sass";
import DateView from "components/DateView";
import {INewsDetail} from 'types/INewsDetail'

interface INewsItemParams {
	item: INewsDetail
}

const NewsItem: React.FC<INewsItemParams> = ({item}) => {
	return (
		<NavLink className='news-item' to={routeNewsDetailPage(item._id)}>
			<div className='item-title'>
				<h3>{item.title}</h3>
			</div>
			<div className='bottom-wrapper'>
				<p className='source'>{item.clean_url}</p>
				<DateView value={item.published_date} />
			</div>
		</NavLink>
	);
};

export default NewsItem;
