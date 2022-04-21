import React, {useState, useEffect} from "react";
import routeMain from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNews from "services/getNews";

import "./styles.sass";

const MainPage = () => {
	const [newsList, setNewsList] = useState([])

	useEffect(() => {
		getNews().then((response) => setNewsList(response.articles))
	}, [])

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
