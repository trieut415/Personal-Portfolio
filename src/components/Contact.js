import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="thank-you full-screen" id="thank-you">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col size={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="thank-you-message">Thank You for Visiting!</h2>
                  <p className="thank-you-description">
                    If you have any questions or would like to contact me, click the 'Let's Connect' button anytime to get in touch!
                  </p>
                  <a className="thank-you-button" href="/">
                    Back to Home
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
