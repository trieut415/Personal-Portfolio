import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Modal, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'connect'];

            let current = 'home';

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = sections[i];
                        break;
                    }
                }
            }

            if (current !== activeLink) {
                setActiveLink(current);
            }

            setScrolled(window.scrollY > 50);
        };

        const onResize = () => {
            const root = document.documentElement;
            if (window.innerHeight < 500) {
                root.style.fontSize = '12px';
            } else {
                root.style.fontSize = '16px';
            }
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [activeLink]);

    const handleNavClick = (section) => {
        setActiveLink(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
    const validatePhoneNumber = (phone) => /^\d{10,15}$/.test(phone);

    const isFormValid = () => {
        if (!validateEmail(formDetails.email)) {
            setStatus({ success: false, message: "Please enter a valid email address." });
            return false;
        }
        if (!validatePhoneNumber(formDetails.phone)) {
            setStatus({ success: false, message: "Please enter a valid phone number (10-15 digits)." });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        setStatus({});

        if (!isFormValid()) {
            setButtonText("Send");
            return;
        }
        try {
            await emailjs.send(
                "service_1p2m8wl",
                "template_ay8ppft",
                {
                    firstName: formDetails.firstName,
                    lastName: formDetails.lastName,
                    phone: formDetails.phone,
                    email: formDetails.email,
                    message: formDetails.message,
                },
                "lzJ5YaZkacAj0HYVT"
            );
            
            setFormDetails(formInitialDetails);
            setButtonText("Send");
            setStatus({ success: true, message: "Message sent successfully!" });
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormDetails(formInitialDetails);
        setStatus({});
        setButtonText('Send');
    };

    return (
        <>
            <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${window.innerHeight < 500 ? "small-screen" : ""}`}>
                <Container>
                    <Navbar.Brand href="#home" onClick={() => handleNavClick('home')}>
                        <img src={logo} alt="Logo" style={{ maxWidth: window.innerHeight < 500 ? '80px' : '100px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {['home', 'about', 'experience', 'projects', 'skills'].map((section) => (
                                <Nav.Link
                                    key={section}
                                    href={`#${section}`}
                                    className={activeLink === section ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => handleNavClick(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/trieuttran/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="LinkedIn" />
                                </a>
                                <a href="https://github.com/trieut415" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="Github" />
                                </a>
                            </div>
                            <button className="vvd" onClick={() => setShowModal(true)}>
                                <span>Let's Connect</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Get In Touch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} className="mb-4 mb-md-0">
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                                    }
                                </TrackVisibility>
                            </Col>
                            <Col xs={12} md={6}>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                            <form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required className="form-control" />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required className="form-control" />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required className="form-control" />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className="form-control" />
                                                    </Col>
                                                    <Col xs={12} className="mb-3">
                                                        <textarea rows="10" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required className="form-control" style={{ resize: 'vertical' }}></textarea>
                                                    </Col>
                                                    <Col xs={12} className="mb-3 text-center">
                                                        <button type="submit" className={`btn ${status.success === true ? 'success-button' : status.success === false ? 'error-button' : 'primary-button'}`} disabled={buttonText === "Sending..."}>
                                                            {buttonText}
                                                        </button>
                                                    </Col>
                                                    {status.message && (
                                                        <Col xs={12} className="mb-3 text-center">
                                                            <p className={status.success ? "success-message" : "error-message"}>{status.message}</p>
                                                        </Col>
                                                    )}
                                                </Row>
                                            </form>
                                        </div>
                                    }
                                </TrackVisibility>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
};
