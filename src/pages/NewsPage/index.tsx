import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "components/PageTitle";
import routeMain from "./routes";
import NewsList from "components/NewsList";

import {selectList} from 'store/news/selectors'
import {loadNews} from 'store/news/actions'

import "./styles.sass";

const NewsPage = () => {
	const dispatch  = useDispatch();
	const newsList = useSelector(selectList); 

	useEffect(() => {
		dispatch(loadNews() as any);
	}, [dispatch]);

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
