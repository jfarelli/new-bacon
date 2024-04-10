import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaconBrandCards from './BaconBrandCards';

function BrandsView({ brand, onSelectBrand }) {
	const [uniqueCompanies, setUniqueCompanies] = useState([]);

	useEffect(() => {
		let seen = new Set();
		const filteredCompanies = brand.filter((company) => {
			const duplicate = seen.has(company.companyName);
			seen.add(company.companyName);
			return !duplicate;
		});

        const sortedCompanies = filteredCompanies.sort((a, b) => {
            return a.companyName.localeCompare(b.companyName);
        })

		setUniqueCompanies(sortedCompanies);
	}, [brand]);

	return (
		<Row className="justify-content-center g-4">
			{uniqueCompanies.map((company) => (
				<Col
					key={company.id}
					xs={12}
					sm={6}
					md={4}
					lg={3}
					className="d-flex justify-content-center"
				>
					<BaconBrandCards brand={company} onSelect={onSelectBrand} />
				</Col>
			))}
		</Row>
	);
}

export default BrandsView;
