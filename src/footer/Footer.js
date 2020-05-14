import React from 'react';
import MyDate from './Date';

const CallDate = () => {
	return (
		<h3 className="App-footer" style={{fontWeight: 100}}>
			Today: {MyDate()} Have a nice day!
		</h3>
	);
}

export default CallDate;