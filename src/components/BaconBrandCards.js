import React from 'react';
import Card from 'react-bootstrap/Card';

const BaconBrandCards = ({ brand, onSelect }) => {
	// console.log('BRAND in BBC', brand);
	return (
		<>
			<Card
				key={brand.id}
				className="bg-light text-center"
				onClick={() => onSelect(brand.id)}
				style={{ cursor: 'pointer', margin: '10px' }}
			>
				<Card.Body>
					<Card.Img
						variant="top"
						src={brand.logo}
						style={{
							width: '100px',
							height: '100px',
							objectFit: 'contain',
						}}
					/>
					<Card.Title>{brand.companyName}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default BaconBrandCards;
