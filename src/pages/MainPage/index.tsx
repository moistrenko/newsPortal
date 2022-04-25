import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import routeMain from "./routes";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import {selectList} from 'store/news/selectors'
import {loadNews} from 'store/news/actions'

import "./styles.sass";

const MainPage = () => {
	const dispatch  = useDispatch();
	const newsList = useSelector(selectList); 

	useEffect(() => {
		dispatch(loadNews() as any);
	}, [dispatch]);
		
	return (
		<section className='main-page'>
			<PageTitle
				title={
					<h1>
						Всегда <br /> свежие <span>новости</span>
					</h1>
				}
			/>
			{newsList.length > 0 && <NewsList list={newsList.slice(0, 6)} />}
		</section>
	);
};

export { routeMain };
export default MainPage;
