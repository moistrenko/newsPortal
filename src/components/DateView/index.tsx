import React from 'react';
import prepareDate from '../utils/prepareDate';
import './styles.sass'

interface IDateViewParams {
	value: string
}

const DateView: React.FC<IDateViewParams> = ({value}) => {
	const {day, month} = prepareDate(value);
	return (
		<div className="date-view">
			<span className="day">{day}</span> / {" "}
			<span className="month">{month}</span>
		</div>
	)
}

export default DateView;