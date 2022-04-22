import React from 'react';
import routeMain from './routes';
import image from 'assets/img/image.jpeg'

import './styles.sass'

const ContactsPage = () => {
	return (
		<div className="contacts">
			<div className="info">
				<div className="phone">
					<a href="tel:+79991234567">+7 (999) 123 45 67</a>
				</div>
				<div className="name">
					Антолий <br /> Мойстренко
				</div>
				<div className="mail">
					<a href="mailto:mail@domain.ru">mail@domain.ru</a>
				</div>
				<div className="position">
					frontend development
				</div>
				<div className="techologies">
					HTML CSS JS
				</div>
			</div>
			<div className="image">
				<img src={image} alt='Программист'/>
			</div>
		</div>
	)
}

export {routeMain}
export default ContactsPage