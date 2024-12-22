import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../assets/img/profile_picture.jpg";

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Reference to the section element

  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120); // Typing speed
  const [index, setIndex] = useState(1);
  const toRotate = ["About Me"]; // Text to be typed

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isVisible]);

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
    <section
      className={`about ${isVisible ? "animate" : ""}`} // Add class when visible
      id="about"
      ref={sectionRef}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={8}>
            <div>
              <div style={{ display: 'inline-block' }}>
                <h2 style={{ display: 'inline-block', marginRight: '5px', fontWeight: 'bold', fontSize: '30px' }}>
                  <span>{text.substring(0, 5)}</span>
                </h2>
                <h2
                  style={{
                    display: 'inline-block',
                    color: '#00ADB5',
                    fontWeight: 'bold',
                    fontSize: '30px',
                  }}
                >
                  {text.substring(5)}
                </h2>
              </div>
              <p>
                I am currently a senior at Boston University studying computer engineering concentrating on machine learning, also planning on
                pursuing my graduate degree at Boston University. Until college, I have spent most of my life and grew up in the Bay Area, 
                more specifically San Francisco. I'm currently a student-athlete on the BU Men's Club Hockey Team, and a sprinter in the Running Club.
              </p>
              <p>
                I am currently interning at Openprise, where I have gained hands-on experience deploying LLMs via inference servers and automating 
                processes in Docker. Over the summer, I developed data transformation and text processing tasks, further enhancing my software development skills. 
                Now, I focus on optimizing and refining these data tasks to ensure they are easily deployable in production. 
              </p>
              <p>
                Formerly, I was a tech intern at my high school, which consisted of managing all of the school's incoming and existing technology.  
                In addition, I was also a camp counselor, hockey coach, and aided in rink management, including planning events for many organizations around San Francisco.
              </p>
              <p>
                Currently, I'm building a cow identification system using computer vision and deep learning on edge devices, including ear tag detection for livestock management. 
                I also work as an Ice Crew member at Agganis Arena during NCAA D1 Men’s hockey games. 
              </p>
              <p>
                Don't hesitate to get in touch for anything ranging from projects, research opportunities to interests!
              </p>
            </div>
          </Col>

          <Col xs={12} md={4} xl={4} className="d-flex justify-content-center">
            <img
              src={profilePic}
              alt="Portrait of Trieu Tran"
              className="rounded-full border border-gray-300 shadow-md"
              style={{
                width: '250px',
                height: '310px',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '50%',
                border: '5px solid rgb(204, 204, 204)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 5px 5px 15px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};