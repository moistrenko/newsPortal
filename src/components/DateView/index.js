import React from 'react';
import prepareDate from '../utils/prepareDate';
import './styles.sass'

const DateView = (props) => {
	const {day, month} = prepareDate(props);
	return (
		<div className="date-view">
			<span className="day">{day}</span> / {" "}
			<span className="month">{month}</span>
		</div>
	)
}

export default DateView;