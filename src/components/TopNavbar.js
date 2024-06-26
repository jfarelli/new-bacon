import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const TopNavBar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" style={{ padding: '0' }}>
			<Container fluid style={{ backgroundColor: '#F9BB38', padding: '10px' }}>
				<Navbar.Brand
					as={Link}
					to="/"
					style={{ color: '#9b4428' }}
					className="fw-bold fs-4"
				>
					Is Your Bacon <u>Resealable</u>?
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						{/* <Nav.Link href="#action2">Link</Nav.Link> */}
						<NavDropdown title="Bacon Brands" id="navbarScrollingDropdown">
							<NavDropdown.Item as={Link} to="#action3">
								Applegate Naturals
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#action4">
								Boar's Head
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={Link} to="#only-resealable-bacon">
								Show All Resealable Bacon
							</NavDropdown.Item>
						</NavDropdown>
						{/* <Nav.Link href="#" disabled>
							Link
						</Nav.Link> */}
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search Bacon"
							className="me-2"
							aria-label="Search"
						/>
						<Button className="search-btn">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopNavBar;
