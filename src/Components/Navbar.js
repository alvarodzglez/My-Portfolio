import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

import navIcon1 from "../assets/linkedin.svg";
import navIcon2 from "../assets/github.svg";
import logo from "../assets/logo.png"

const MyNavbar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState (false)
    const [isExpanded, setIsExpanded] = useState (false)

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 50) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const handleToggle = () => {
        setIsExpanded(!isExpanded); 
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo_ADG"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                <span className={`navbar-toggler-icon ${isExpanded ? "expanded" : ""}`}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/alvaro-diaz-gonzalez-49797485r'><img src={navIcon1} alt=''/></a>
                        <a href='https://github.com/alvarodzglez'><img src={navIcon2} alt=''/></a>
                    </div>
                    <HashLink to='#contact'>
                        <button><span>Let’s Connect</span></button>
                    </HashLink>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

export default MyNavbar;