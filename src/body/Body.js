import React from 'react';
import MyInfo from './Info';

const CallInfo = () => {
	return (
		<div className="App-body">
			<div className="App-img-wrapper">
				<img src="../sphere.png" className="App-logo"/>
			</div>
			<div className="App-body-mid" style={{width: 'auto'}}>
				{MyInfo()}
			</div>
		</div>
	);
}

export default CallInfo;