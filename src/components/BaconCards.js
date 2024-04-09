import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const BaconCards = ({data}) => {

    let { brandId } = useParams();  
	return (
		<Card href={brandId} style={{ width: '18rem' }}>
			<Card.Body className='d-flex flex-column align-items-center'>
				<Card.Title>{data.companyName}Huh?</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				<Card.Text className='text-success'>Resealable</Card.Text>
				<Card.Text className='text-danger'>Not-Resealable</Card.Text>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button href="#">Card Link</Button>
			</Card.Body>
		</Card>
	);
};

export default BaconCards;
