import React, {useState, useEffect} from "react";
import PageTitle from "components/PageTitle";
import routeMain from "./routes";
import NewsList from "components/NewsList";
import getNews from "services/getNews";

import {INewsDetail} from 'types/INewsDetail'

import "./styles.sass";

const NewsPage = () => {
	const [newsList, setNewsList] = useState<INewsDetail[]>([])

	useEffect(() => {
		getNews().then((response) => setNewsList(response.data.articles))
	}, [])

	return (
		<section className='news-page'>
			<PageTitle
				title={
					<h1>
						Быть <br /> в курсе <span>событий </span>
					</h1>
				}
			/>
			{newsList.length > 0 && <NewsList list={newsList} />}
		</section>
	);
};

export { routeMain };
export default NewsPage;
