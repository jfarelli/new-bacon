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
	const [uniqueCompanies, setUniqueCompanies] = useState([]);

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

	// useEffect(() => {
	// 	let seen = new Set();
	// 	const filteredCompanies = brands.filter((company) => {
	// 		const duplicate = seen.has(company.companyName);
	// 		seen.add(company.companyName);
	// 		return !duplicate;
	// 	});

	// 	const sortedCompanies = filteredCompanies.sort((a, b) => {
	// 		return a.companyName.localeCompare(b.companyName);
	// 	});

	// 	setUniqueCompanies(sortedCompanies);
	// }, [brands]);

	const handleSelectBrand = (companyName) => {
		navigate(`/bacon/${companyName}`);
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
								<BrandsView brand={data} onSelectBrand={handleSelectBrand} />
							)
						}
					/>
					<Route
						path="/bacon/:companyName"
						element={<BaconCards data={data} />}
					/>
				</Routes>
			</Container>
		</>
	);
}

export default App;
