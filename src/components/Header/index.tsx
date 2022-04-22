import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeContactsPage } from "pages/ContactsPage";
import { routeMain as routeNewsPage } from "pages/NewsPage";
import "./styles.sass";

const Header = () => {
	return (
		<header className='header'>
			<h2 className='title'>Новостник</h2>
			<nav>
				<NavLink to={routeMainPage()}>
					Главная
				</NavLink>
				<NavLink to={routeNewsPage()} >
					Новости
				</NavLink>
				<NavLink to={routeContactsPage()} >
					Контакты
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
