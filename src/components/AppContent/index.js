import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./styles.sass";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import ContactsPage, { routeMain as routeContactsPage } from "pages/ContactsPage";
import NewsPage, { routeMain as routeNewsPage } from "pages/NewsPage";
import NewsDetailPage, { routeMain as routeNewsDetailPage } from "pages/NewsDetailPage";
import Header from "components/Header";
import Footer from "components/Footer";

const AppContent = () => {
	return (
		<div className="main-wrapper">
			<Header />
			<main>
				<Routes>
					<Route exact path={routeMainPage()} element={<MainPage/>} />
					<Route exact path={routeContactsPage()} element={<ContactsPage/>} />
					<Route exact path={routeNewsPage()} element={<NewsPage/>} />
					<Route exact path={routeNewsDetailPage()} element={<NewsDetailPage/>} />
					<Route path="*" element={<Navigate to={routeMainPage()} />}/>
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default AppContent;
