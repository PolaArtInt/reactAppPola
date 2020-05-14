import React from 'react';
import MyBio from './Bio';

const CallBio = () => {
	return (
		<h1 className="App-header">
			{MyBio()}
		</h1>
	);
}

export default CallBio;