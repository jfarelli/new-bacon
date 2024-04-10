import React from 'react';
import Card from 'react-bootstrap/Card';

const BaconBrandCards = ({ brand, onSelect }) => {
	return (
		<>
			<Card
				key={brand.id}
				className="border-0 text-center h-80 w-75"
				onClick={() => onSelect(brand.id)}
				style={{ cursor: 'pointer', margin: '10px', background: '#FAFAFA'}}
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
					<Card.Title>{brand.companyName}</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

export default BaconBrandCards;
