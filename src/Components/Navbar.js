import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from "react-router-dom"

function OffcanvasExample() {
    const nav = useNavigate();
    // const handleSignUp = () => {
    //     console.log('hello');
    //     nav('/dggd')
    //     // window.location.href = "../"
    // }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 shadow" fixed='top'>
                    <Container>
                        <Navbar.Brand className='fw-bold' onClick={() => { nav("/") }} style={{ cursor: 'pointer' }}>PayBuddy</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='fw-bold' onClick={() => { nav("/") }}>
                                    PayBuddy
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavDropdown title="Why Paybuddy" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#">
                                            <span class="d-inline-block bg-success rounded-circle p-1 me-3"></span>
                                            Why Choose PayBuddy
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <span class="d-inline-block bg-primary rounded-circle p-1 me-3"></span>
                                            Success Rates
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <span class="d-inline-block bg-danger rounded-circle p-1 me-3"></span>
                                            Demo
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            <span class="d-inline-block bg-info rounded-circle p-1 me-3"></span>
                                            Seperated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to="/Support" className='nav-link'>Support</Link>
                                    <Link to="/Faq" className='nav-link'>FAQ</Link>
                                </Nav>
                                <Link variant="dark" to="/Signup" className='btn btn-dark'>Create a free acount</Link>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))
            }
        </>
    );
}

export default OffcanvasExample;