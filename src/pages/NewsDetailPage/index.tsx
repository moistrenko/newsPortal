import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DateView from "components/DateView";
import routeMain from "./routes";
import { selectList } from "store/news/selectors";

import { ID } from "types/ID";
import { INewsDetail } from "types/INewsDetail";

import "./styles.sass";

const NewsDetailPage = () => {
	const { id } = useParams<ID>();
	const [news, setNews] = useState<INewsDetail | undefined>(undefined);
	const newsList = useSelector(selectList); 

	useEffect(() => {
		const currentNews = newsList?.find((item: INewsDetail) => item._id === id);
		setNews(currentNews);
	}, [id, newsList]);
	return (
		<section className='news-detail-page'>
			{news ? (
				<div className='news-detail-wrapper'>
					<div className='left-part'>
						<h2 className='title'>{news.title}</h2>
						<p className='source'>{news.clean_url}</p>
						<DateView value={news.published_date} />
					</div>
					<div className='right-part'>
						<img src={news.media} alt={news.media} />
						<p className='summary'>{news.summary}</p>
					</div>
				</div>
			) : (
				<></>
			)}
		</section>
	);
};

export { routeMain };
export default NewsDetailPage;
