import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const BaconCards = ({ data }) => {
	let { companyName } = useParams();
	console.log('DATA in BaconCards', data);
	const companyCards = data.filter((card) => card.companyName === companyName);

	return (
		<>
			<Row className="justify-content-center g-4">
				{companyCards.length > 0 ? (
					companyCards.map((card, index) => (
						<Col
							key={index}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className="d-flex justify-content-center"
						>
							<Card
								key={index}
								style={{ width: '18rem', marginBottom: '20px' }}
							>
								<Card.Body className="d-flex flex-column align-items-center text-center">
									<Card.Img
										vaiant="top"
										src={`http://localhost:8000/${card.image}`}
										style={{
											width: '100%',
											height: '200px',
											objectFit: 'contain',
											// display: loading ? 'none' : 'block',
											display: 'block',
										}}
									/>
									<Card.Title className="fw-bold">
										{card.companyName}
									</Card.Title>
									<Card.Subtitle className="mb-2 text-muted fw-semibold">
										{card.baconStyle}
									</Card.Subtitle>
									{card.resealable === 'YES' ? (
										<Card.Text className="text-success fw-bold">
											Resealable
										</Card.Text>
									) : (
										<Card.Text className="text-danger fw-bold">
											Not-Resealable
										</Card.Text>
									)}
									<Button href="#">Social Buttons...</Button>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<Col>
						<p>No cards found for this company.</p>
					</Col>
				)}{' '}
				{/* Handle case with no matching cards */}
			</Row>
		</>
	);
};

export default BaconCards;
