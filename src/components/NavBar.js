import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Modal, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com"; // Import EmailJS
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import contactImg from "../assets/img/contact-img.svg"; // Ensure this path is correct
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false); // Modal visibility state

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

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [activeLink]);

    const handleNavClick = (section) => {
        setActiveLink(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Contact form state and handlers
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({}); // { success: boolean, message: string }

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    // Utility to validate email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Checks for @ and valid TLD
        return emailRegex.test(email);
    };

    // Utility to validate phone number
    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,15}$/; // Checks for digits only, 10-15 length
        return phoneRegex.test(phone);
    };

    // Form validation function
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

    // Updated handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        setStatus({});

        // Perform validation before sending
        if (!isFormValid()) {
            setButtonText("Send");
            return;
        }
        try {
            // Use EmailJS to send the email
            await emailjs.send(
                "service_1p2m8wl", // Replace with your Service ID
                "template_ay8ppft", // Replace with your Template ID
                {
                    firstName: formDetails.firstName,  // Matches {{firstName}}
                    lastName: formDetails.lastName,    // Matches {{lastName}}
                    phone: formDetails.phone,          // Matches {{phone}}
                    email: formDetails.email,          // Matches {{email}}
                    message: formDetails.message,      // Matches {{message}}
                },
                "lzJ5YaZkacAj0HYVT" // Replace with your Public Key
            );
            
            setFormDetails(formInitialDetails);
            setButtonText("Send");
            setStatus({ success: true, message: "Message sent successfully!" });
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
    };

    // Reset form and status when modal is closed
    const handleCloseModal = () => {
        setShowModal(false);
        setFormDetails(formInitialDetails);
        setStatus({});
        setButtonText('Send');
    };

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home" onClick={() => handleNavClick('home')}>
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#about"
                                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('about')}
                            >
                                About Me
                            </Nav.Link>
                            <Nav.Link
                                href="#experience"
                                className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('experience')}
                            >
                                Experience
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('projects')}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => handleNavClick('skills')}
                            >
                                Skills
                            </Nav.Link>
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

            {/* Contact Modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                centered
                dialogClassName="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Get In Touch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} className="mb-4 mb-md-0">
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <img
                                            className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                            src={contactImg}
                                            alt="Contact Us"
                                        />
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
                                                        <input
                                                            type="text"
                                                            value={formDetails.firstName}
                                                            placeholder="First Name"
                                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                                            required
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input
                                                            type="text"
                                                            value={formDetails.lastName}
                                                            placeholder="Last Name"
                                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                                            required
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input
                                                            type="email"
                                                            value={formDetails.email}
                                                            placeholder="Email Address"
                                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                                            required
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6} className="mb-3">
                                                        <input
                                                            type="tel"
                                                            value={formDetails.phone}
                                                            placeholder="Phone No."
                                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                                            className="form-control"
                                                        />
                                                    </Col>
                                                    <Col xs={12} className="mb-3">
                                                        <textarea
                                                            rows="10"
                                                            value={formDetails.message}
                                                            placeholder="Message"
                                                            onChange={(e) => onFormUpdate('message', e.target.value)}
                                                            required
                                                            className="form-control"
                                                            style={{ resize: 'vertical' }}
                                                        ></textarea>
                                                    </Col>
                                                    <Col xs={12} className="mb-3 text-center">
                                                        <button
                                                            type="submit"
                                                            className={`btn ${status.success === true ? 'success-button' : status.success === false ? 'error-button' : 'primary-button'}`}
                                                            disabled={buttonText === "Sending..."}
                                                        >
                                                            {buttonText}
                                                        </button>
                                                    </Col>
                                                    {status.message && (
                                                        <Col xs={12} className="mb-3 text-center">
                                                            <p className={status.success ? "success-message" : "error-message"}>
                                                                {status.message}
                                                            </p>
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
                        {/* Custom Styles */}
                        <style jsx="true">{`
                .custom-modal .modal-dialog {
                    max-width: 800px; /* Adjust width as needed */
                    border-radius: 20px; /* Rounded corners */
                }
                .custom-modal .modal-content {
                    padding: 20px;
                    background: linear-gradient(to right, #A13582, #5730B4); /* Linear Gradient Background */
                    color: white; /* Ensure text is readable */
                    border: none; /* Optional: Remove border if desired */
                    border-radius: 20px; /* Rounded corners */
                }

                /* Input and Textarea Styles */
                .custom-modal .form-control {
                    background-color: transparent; /* Transparent background */
                    color: white; /* White text */
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
                }

                /* Placeholder Text Styles */
                .custom-modal .form-control::placeholder {
                    color: white; /* White placeholder text */
                    transition: color 0.3s;
                }

                /* Focused State Styles */
                .custom-modal .form-control:focus {
                    background-color: white; /* White background on focus */
                    color: #555555; /* Greyish text */
                    border-color: #555555; /* Greyish border */
                    outline: none; /* Remove default outline */
                }

                /* Placeholder Text on Focus */
                .custom-modal .form-control:focus::placeholder {
                    color: #555555; /* Greyish placeholder text on focus */
                }

                /* Button Styles */
                .custom-modal .btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                    min-width: 120px;
                }
                .custom-modal .primary-button {
                    background-color: #0d6efd; /* Default Bootstrap Primary Color */
                    color: white;
                }
                .custom-modal .primary-button:hover {
                    background-color: #0b5ed7; /* Darker shade on hover */
                }

                /* Success and Error Button Styles */
                .success-button {
                    background-color: #28a745; /* Green for success */
                    color: white;
                }
                .success-button:hover {
                    background-color: #218838; /* Darker green on hover */
                }

                .error-button {
                    background-color: #dc3545; /* Red for error */
                    color: white;
                }
                .error-button:hover {
                    background-color: #c82333; /* Darker red on hover */
                }

                /* Success and Error Message Styles */
                .success-message {
                    color: #28a745; /* Green */
                    font-weight: bold;
                }
                .error-message {
                    color: #dc3545; /* Red */
                    font-weight: bold;
                }

                /* Ensure images are responsive */
                .custom-modal img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
            `}</style>
        </>
    );
};
