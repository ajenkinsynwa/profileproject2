import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar = () => {
  const [ activeLink, setActiveLink ] = useState('home');
  const [ scrolled, seScrolled] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      }else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []) 


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="Logo" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className='navbar-toggler-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' }>Home<Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              </div>
              <button className="vvd" oncClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicExample;