import * as React from 'react';
import oval from '../images/oval.svg';

const LoadingSpinner = () => {
	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center">
				<img src={oval} alt="loading" />
			</div>
		</>
	);
};

export default LoadingSpinner;
