import React from 'react';
import NewsItem from 'components/NewsList/components/NewsItem'
import './styles.sass'

const NewsList = (props) => {
	return (
		<div className="news-list">
			{props.list.map((news) => (
				<NewsItem key={news._id} item={news}/>
			))}
		</div>
	)
}

export default NewsList