import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBriefcase, 
  faGraduationCap, 
  faGlobe, 
  faPlus, 
  faMinus 
} from "@fortawesome/free-solid-svg-icons";

// Reusable CourseCategory Component
const CourseCategory = ({ title, classes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div style={{ marginBottom: "1em" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ marginRight: "0.5em", marginBottom: 0 }}>{title}</h4>
        <button 
          onClick={toggleExpand} 
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            margin: 0,
            display: "flex",
            alignItems: "center"
          }}
          aria-label={isExpanded ? "Collapse" : "Expand"}
          aria-expanded={isExpanded}
        >
          <FontAwesomeIcon 
            icon={isExpanded ? faMinus : faPlus} 
            style={{ 
              verticalAlign: "middle", 
              marginTop: "-1px", // Adjusted to move the icon up by 1px
              fontSize: "14px" // Optional: adjust size if necessary
            }} 
          />
        </button>
      </div>
      {isExpanded && (
        <ul style={{ paddingLeft: "1.5em", marginTop: "0.5em" }}>
          {classes.map((cls, index) => (
            <li 
              key={index} 
              style={{ 
                marginBottom: "0.5em", 
                color: "#6E6E6D", // Set text color
                fontSize: "14px" // Optional: adjust font size for better readability
              }}
            >
              {cls}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Experience = () => {
  // Define coursework data for MS and BS
  const msCoursework = {
    "Cybersecurity": [
      "Cybersecurity",
      "Advances in Cybersecurity and IoT Security",
      "Learning from Data"
    ],
    "Software Engineering and Principles": [
      "Advanced Data Structures",
      "Cloud Computing",
      "Embedded Systems",
      "Full Stack Development at Scale",
      "Client-Server Software"
    ]
  };

  const bsCoursework = {
    "Machine Learning, AI, and Data Science": [
      "Deep Learning",
      "Machine Learning",
      "Probability & Statistics & Data Science",
      "Reinforcement Learning",
      "Senior Capstone (Computer Vision Project)"
    ],
    "Software Engineering and Systems": [
      "Client-Server Software",
      "Embedded Systems",
      "Full-Stack Software at Scale",
      "Smart and Connected Systems",
      "Software Design",
      "Software Engineering Principles"
    ],
    "Computer Science Fundamentals": [
      "Algorithms & Data Structures",
      "Computer Organization",
      "Discrete Math",
      "Logic Design"
    ],
    "Engineering and Mathematics": [
      "Differential Equations",
      "Electrical Circuits",
      "Engineering Mechanics",
      "Linear Algebra",
      "Probability & Statistics"
    ],
    "Design and Simulation Tools": [
      "CAD (Computer-Aided Design)"
    ],
    "Physical and Natural Sciences": [
      "General Chemistry"
    ]
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <br />
        <h1>Resume</h1>
        <h6 style={{ color: "#888888", textAlign: "center" }}>
          More of my credentials.
        </h6>
        <br />
        <br />

        <h2>Work Experience</h2>

        <div className="timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Software Engineering Intern</h4>
              <h5>June 2024 - Present</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Openprise</h4>
              <div className="separator"></div>
              <p>
                • Deployed multiple large language models (LLMs) on inference servers with SSL and API key authentication for secure, scalable client hosting.<br />
                • Automated end-to-end deployment processes using Docker containers and bash scripts, ensuring efficient and reliable model management.<br />
                • Developed data transformation and text processing tasks with Python, PySpark, Fugue, and SQL; collaborated on automated testing frameworks with pytest to improve code reliability and product integration.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Ice Crew</h4>
              <h5>May 2023 - Jan 2024</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Yerba Buena Ice Skating & Bowling Center</h4>
              <div className="separator"></div>
              <p>
                • Assisted customers with rink facilities, inquiries, and skate sharpening services, ensuring a safe and enjoyable experience.<br />
                • Monitored ice conditions and coached skaters of all ages during events and activities.<br />
                • Contributed to event planning, setup, and breakdown by coordinating and handling event materials.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Ice Crew</h4>
              <h5>September 2021 - Present</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Boston University Agganis Arena</h4>
              <div className="separator"></div>
              <p>
                • Responsible for resurfacing the ice to ensure optimal playing conditions during Division 1 games.<br />
                • Collaborated with maintenance crews to maintain the arena's facilities.<br />
                • Executed on-ice tasks during large public events, contributing to the smooth operation of events at Agganis Arena.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Student Technology Intern</h4>
              <h5>June 2020 - August 2022</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Schools of the Sacred Heart - San Francisco</h4>
              <div className="separator"></div>
              <p>
                • Assisted and observed client systems engineers, gaining insights into system management via the MDM service Jamf.<br />
                • Demonstrated strong education resource management skills through troubleshooting and managing school assets.<br />
                • Contributed to maintaining the distribution and functionality of the school's technology for a K-12 audience.
              </p>
            </div>
          </div>
        </div>

        <h2>Education</h2>

        <div className="timeline">
          {/* Timeline Item 1 - MS */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Computer Engineering (MS)</h4>
              <h5>Expected <br />September 2025 - May 2026</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGraduationCap} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Boston University</h4>
              <div className="separator"></div>

              <p style={{ fontWeight: 500 }}>
                Specialization in Cybersecurity
              </p>
              <br />
              <br />

              <div style={{ fontSize: "16px", fontWeight: "bolder", color: "#003366" }}>
                Coursework
              </div>
              <div className="separator"></div>

              {/* Coursework Categories */}
              {Object.entries(msCoursework).map(([category, classes], index) => (
                <CourseCategory key={index} title={category} classes={classes} />
              ))}
            </div>
          </div>

          {/* Timeline Item 2 - BS */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Computer Engineering (BS)</h4>
              <h5>September 2021 - Present</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGraduationCap} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Boston University</h4>
              <div className="separator"></div>
              <p style={{ fontWeight: 500 }}>
                Concentration in Machine Learning
              </p>

              <br />
              <br />

              <div style={{ fontSize: "16px", fontWeight: "bolder", color: "#003366" }}>
                Coursework
              </div>
              <div className="separator"></div>

              {/* Coursework Categories */}
              {Object.entries(bsCoursework).map(([category, classes], index) => (
                <CourseCategory key={index} title={category} classes={classes} />
              ))}
            </div>
          </div>

          {/* Timeline Item 3 - High School */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>High School</h4>
              <h5>September 2017 - May 2021</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGraduationCap} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Stuart Hall High School</h4>
              <div className="separator"></div>
              <p> 
                IB Diploma <br />
                IB Points: 40<br />
                Cumulative GPA: 4.3/4.0<br />
                Graduated with High Honors, High Honors with Distinction (several quarters), National Honors Society Member.
              </p>
            </div>
          </div>
        </div>

        <h2>Volunteer Experience</h2>
        <div className="timeline">

          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Student Volunteer</h4>
              <h5>January 2020</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Enlaces Comunitarios Internacionales</h4>
              <div className="separator"></div>
              <p>
                • Assisted in large-scale renovation projects in San Jerónimo Tecuanipan, Mexico, enhancing local infrastructure.<br />
                • Cultivated land for agriculture by weeding, rescaping, and planting a variety of fruits and vegetables.<br />
                • Distributed essential supplies and provided academic and physical assistance to local children, addressing community needs.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-content timeline-content-left">
              <h4>Student Volunteer</h4>
              <h5>July 2018 - September 2018</h5>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "white" }} />
            </div>
            <div className="timeline-content timeline-content-right">
              <h4>Aim High</h4>
              <div className="separator"></div>
              <p>
                • Served as a camp counselor during a summer school program, leading and organizing activities for young adolescents.<br />
                • Managed technology-related tasks, including inventory, distribution, and troubleshooting of equipment.<br />
                • Aided office operations by performing minor office tasks and projects.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
