import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/flying_cow.png";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const [index, setIndex] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toRotate = ["Student of Computer Engineering and Machine Learning"];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (updatedText === fullText) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div
                    className={
                      hasAnimated
                        ? "animate__animated animate__fadeIn"
                        : ""
                    }
                  >
                    <h2>Hello, world.</h2>
                    <h2>I'm Trieu Tran.</h2>
                    <h3>
                      <span className="txt-rotate">
                        <span className="wrap">
                          {text}
                          <span className="blinkingCursor">_</span>
                        </span>
                      </span>
                    </h3>
                    <p>San Francisco, CA | Boston, MA</p>
                    <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                      <button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = "/Resume.pdf"; 
                          link.download = "Resume.pdf"; 
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        style={{ opacity: 0.8 }}
                      >
                        Resume <ArrowDownCircle size={21} />
                      </button>
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div
                    className={
                      hasAnimated
                        ? "animate__animated animate__zoomIn"
                        : ""
                    }
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ position: "relative" }}
                  >
                    <img src={headerImg} alt="Header Img" />
                    <div
                      className={`tooltip-container ${
                        showTooltip ? "fade-down" : ""
                      }`}
                    >
                      Check me out in projects!
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
