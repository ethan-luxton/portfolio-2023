import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import json from '../../content/content.json'
const Header = () => {
    return (
    <header className='header'>
        <Navbar className='Nav' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img id="logo" src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" className="about">About</Nav.Link>
                            <Nav.Link href="#portfolio" className="portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#blog" className="blog">Blog</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <h1>Hi, my name is<span> {json.header.name}</span></h1>
    </header>
        
    )
}

export default Header