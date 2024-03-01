import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  let navigate = useNavigate()
  return (
    <Navbar className="navWrapper">
      <Container >
        <Navbar.Brand>CrudApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Dashboard</Nav.Link>
            <Nav.Link onClick={()=>navigate('/create')}>Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar