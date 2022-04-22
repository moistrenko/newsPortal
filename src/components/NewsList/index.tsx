import React from 'react';
import NewsItem from 'components/NewsList/components/NewsItem'
import './styles.sass'

import {INewsDetail} from 'types/INewsDetail'

interface INewsListParams {
	list: INewsDetail[]
}

const NewsList: React.FC<INewsListParams> = ({list}) => {
	return (
		<div className="news-list">
			{list.map((news: INewsDetail) => (
				<NewsItem key={news._id} item={news}/>
			))}
		</div>
	)
}

export default NewsList