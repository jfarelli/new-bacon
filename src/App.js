import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import TopNavbar from './components/TopNavbar';
import BaconCards from './components/BaconCards';
import BrandsView from './components/BrandsView';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { fetchBaconData } from './apiCalls';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetchBaconData()
			.then(({ data }) => {
				setData(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const handleSelectBrand = (brandId) => {
		navigate(`/bacon/${brandId}`);
	};

	return (
		<>
			<TopNavbar />
			<Container className="mt-4">
				<Routes>
					<Route
						path="/"
						element={
							loading ? (
								<LoadingSpinner />
							) : (
								<BrandsView brands={data} onSelectBrand={handleSelectBrand} />
							)
						}
					/>
					<Route path="/bacon/:brandId" element={<BaconCards data={data} />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
