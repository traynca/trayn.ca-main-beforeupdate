import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link"


const NavbarComponent = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="font-mono  py-4 mt-3" >
                <div className="container">
                    <Navbar.Brand className="isClickable" >
                        <Link href="/" passHref>
                            <h1 className="font-bold text-">trayn.ca</h1>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Item className="ms-md-4" >
                                <Link href="/" passHref>
                                    <a className="nav-link">Home</a>
                                </Link>
                            </Nav.Item>
                            <NavDropdown title="Services" className="ms-md-4" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} href="/services/ui-ux" passHref>
                                    UI/UX
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} href="/services/web-development" passHref>
                                    Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} href="/services/dev-ops" passHref>
                                    DevOps
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} href="/services/dedicated-development-center" passHref>
                                    Dedicated Development Center
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} href="/services/legacy-modernization" passHref>
                                    Legacy Modernization
                                </NavDropdown.Item>

                            </NavDropdown>
                            <NavDropdown title="Industries" className="ms-md-4" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} href="/" passHref>
                                    Startups
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} href="/" passHref>
                                    Enterprise
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item as={Link} href="/" passHref>
                                    MedTech
                                </NavDropdown.Item>


                            </NavDropdown>
                            {/* <NavDropdown className="ms-md-4" title="Services">
                                <NavDropdown.Item eventKey="11">
                                    <Link to="/services/ui-ux">UI/UX</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="11">
                                    <Link to="/services/web-development">Web Development</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="11">
                                    <Link to="/services/devops">DevOps</Link>
                                </NavDropdown.Item>

                            </NavDropdown> */}
       

                            <Nav.Item className="ms-md-4" >
                                <Link href="/portfolio" passHref>
                                    <a className="nav-link">Portfolio</a>
                                </Link>
                            </Nav.Item>


                            <Nav.Item className="ms-md-4" >
                                <Link href="/contact" passHref>
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default NavbarComponent;