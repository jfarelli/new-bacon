import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavbar from './components/TopNavbar';
import BaconCards from './components/BaconCards';

function App() {
	return (
		<>
			<TopNavbar />
			<Container className="mt-4">
				<Row className="justify-content-center g-4">
					{[...Array(13)].map((_, idx) => (
						<Col
							key={idx}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className="d-flex justify-content-center"
						>
							<BaconCards />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}

export default App;
