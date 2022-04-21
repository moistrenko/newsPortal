import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DateView from 'components/DateView';
import routeMain from './routes';
import getNews from 'services/getNews';

import './styles.sass'

const NewsDetailPage = () => { 
	const {id} = useParams();
	const [news, setNews] = useState(null);

	useEffect(() => {
		getNews().then((response) => {
			setNews(response.articles.find( item => item._id === id))
		})
	}, [id])
	return (
		<section className="news-detail-page">
			{news ? (
				<div className="news-detail-wrapper">
					<div className="left-part">
						<h2 className="title">
							{news.title}
						</h2>
						<p className="source">
							{news.clean_url}
						</p>
						<DateView value={news.published_date}/>
					</div>
					<div className="right-part">
						<img src={news.media} alt={news.media}/>
						<p className="summary">{news.summary}</p>
					</div>
				</div>
			) : <></>}
		</section>
	)
}

export {routeMain}
export default NewsDetailPage