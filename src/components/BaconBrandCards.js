import React from 'react';
import Card from 'react-bootstrap/Card';

const BaconBrandCards = ({ brand, onSelect }) => {
	return (
		<>
			<Card
				key={brand.companyName}
				className="border-0 text-center h-90 w-75"
				onClick={() => onSelect(brand.companyName)}
				style={{ cursor: 'pointer', margin: '10px', background: '#FAFAFA' }}
			>
				<Card.Body>
					<Card.Img
						variant="top"
						src={`http://localhost:8000/${brand.logo}`}
						style={{
							width: '80%',
							height: '80%',
							objectFit: 'contain',
						}}
					/>
					<Card.Title className="fs-6 text-muted">
						{brand.companyName}
					</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default BaconBrandCards;
