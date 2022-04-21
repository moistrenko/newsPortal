import React from "react";
import "./styles.sass";

const Footer = () => {
	return (
		<footer className='footer'>
			<div>
				Новостник
				<div className='small'>Single Page Application</div>
			</div>
			<div className='small'>Дипломный проект</div>
			<div>
				<div className='small'>Made by</div>
				Анатолий Мойстренко
			</div>
		</footer>
	);
};

export default Footer;
