// src/components/Projects.js

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Modal,
  Button,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cowImg from "../assets/img/flying_cow.png";
import pokemon from "../assets/img/pokemon.png";
import logo from "../assets/img/logo.png";
import gophur from "../assets/img/gophur.png";
import truss from "../assets/img/truss.jpg";
import alu from "../assets/img/alu.jpeg";
import robot from "../assets/img/robot_helper.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import leader from "../assets/img/leader-election.webp";
import cattrack from "../assets/img/cattrack.jpg";
import pill from "../assets/img/smartpill.png";
import pipeline from "../assets/img/pipeline.gif";
import bikelight from "../assets/img/bikelight.png";
import multiclock from "../assets/img/multimodal_clock.jpg";
import counter_fpga from "../assets/img/counter-fpga.png";
import single_cycle from "../assets/img/singlecycle.png";
import linkedlist from "../assets/img/linkedlist.png";
import huffman from "../assets/img/huffmantree.png";
import merkle from "../assets/img/merkletree.png";
import skiplist from "../assets/img/skiplist.png";
import mario from "../assets/img/mario.png"
import detectron2 from "../assets/img/detectron2.png"
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css"; // Ensure you have the custom CSS as previously mentioned

export const Projects = () => {
  // Projects Data with longDescription placeholders
  const machineLearningProjects = [
    {
      title: "AmazingCowYoloV11",
      description: "Object Detection for Agriculture",
      longDescription:
        "This project is designed to improve cow identification and data collection on dairy farms. This non-invasive, AI-powered camera system accurately reads ear tags and recognizes unique coat patterns to identify each cow. By automating the identification process, it reduces the need for manual tracking, minimizes errors, and saves time for farmers. The system seamlessly integrates with farm databases, providing real-time data that helps manage herd health and milk production more effectively.",
      imgUrl: cowImg,
      github: "https://github.com/trieut415/AmazingCowYoloV11",
      externalLink:
      "https://drive.google.com/file/d/1uJDJNEju3rQwrhjjRWxl0WAixVSO6PpN/view?usp=sharing",

    },
    {
      title: "AreYouTrieulyFocusing...",
      description: "Face detection for ensuring maximum attention",
      longDescription:
        "This project used Detectron2 to monitor attention in video feeds by combining face and body detection models with an attention scoring algorithm. Through retraining and tuning, the system achieved improved accuracy under challenging conditions for real-time monitoring.",
      imgUrl: detectron2,
      externalLink:
        "https://drive.google.com/file/d/1GSeRJofIceUZ0-OiwYiLRydqyug15c_s/view?usp=drive_link",
    },
    {
      title: "PySuperTuxKart",
      description: "Smarter Racing with AI and PID Control!",
      longDescription:
        "The project optimized kart racing in PySuperTuxKart by combining PID controllers and enhanced Neural Networks. Key features like dynamic gain scheduling and apex targeting improved trajectory planning and control, with testing showing better precision and speed across tracks.",
      imgUrl: mario,
      externalLink:
        "https://drive.google.com/file/d/1IvvS9At4rmU28emGE0iETepTCjY1YpCS/view?usp=sharing",
    },
    {
      title: "2D Pokemon Game",
      description: "Game Development",
      longDescription:
        "This is a simple 2D Pokémon game where trainers and Pokémon navigate a two-dimensional plane featuring designated Pokémon Gyms and Centers. Players can command trainers to move to specific locations, engage in battles at Gyms, recover at Centers, purchase potions, and manage their activities through intuitive commands. The game progresses in discrete time steps, allowing Pokémon to fight, heal, and interact seamlessly within the game environment. With a set number of Gyms and Centers, the game offers strategic opportunities for trainers to enhance their Pokémon's strength and manage their resources effectively.",
      imgUrl: pokemon,
      github: "https://github.com/trieut415/2D-Pokemon-Game",
    },
    {
      title: "Personal Portfolio",
      description: "Web Development",
      longDescription:
        "This is the source code for my personal portfolio, made using React.js and bootstrap.",
      imgUrl: logo,
      github: "https://github.com/trieut415/Personal-Portfolio",
    },
    {
      title: "Gophur",
      description: "Smart Application Development",
      longDescription:
        "Gophur is a social media platform designed to bridge the gap between businesses and consumers by fostering personal connections. The platform allows users to create either business or personal profiles, enabling businesses to share updates about their brands, products, and services, while personal users can interact with these posts and connect with other individuals. All user data is securely stored in an online database, ensuring privacy and safety. By facilitating meaningful interactions and providing a tailored user experience, Gophur aims to enhance engagement, improve brand visibility for businesses, and create a vibrant community where authentic connections thrive.",
      imgUrl: gophur,
      github: "https://github.com/trieut415/Gophur",
    },
  ];

  const embeddedSystemsProjects = [
    {
      title: "Personal Indoor Robot Assistant",
      description: "Robotics and Automation",
      longDescription:
        "The Personal Indoor Robot Assistant project demonstrates the design and implementation of a wheeled robot capable of autonomous navigation through predefined waypoints, real-time obstacle avoidance, and remote control functionality. Using the ESP32 microcontroller, the robot integrates indoor localization via the Optitrack system, obstacle detection through Sharp-IR sensors, and real-time data visualization through a Streamlit interface.",
      imgUrl: robot,
      github: "https://github.com/trieut415/Personal-Indoor-Robot-Assistant",
    },
    {
      title: "Leader Election",
      description: "Distributed Systems",
      longDescription:
        "The Secure E-Voting System is a distributed electronic voting platform designed to ensure secure, reliable, and dynamic voting processes. Utilizing Near Field Communication (NFC) simulated via Infrared (IR), the system enables voter authentication, vote transmission, and real-time result reporting. A dynamically elected coordinator manages vote collection and securely logs data to a central database hosted on a Raspberry Pi. The project demonstrates resilience through automatic leader election and failover mechanisms, ensuring uninterrupted operation in case of coordinator failure.",
      imgUrl: leader,
      github: "https://github.com/trieut415/Leader-Election",
    },
    {
      title: "Cat Tracker",
      description: "Smart Wearables",
      longDescription:
        "The FitCat project extends the functionality of the Smart Cat Collar by creating a centralized portal to aggregate and display data from multiple cat trackers in real time. This system collects activity data via Wi-Fi, identifies the most active cat using a rolling leaderboard, and provides live updates to users through a web interface. FitCat also features a live video stream from a camera for monitoring the cats’ activities. This project combines IoT networking, sensor integration, and web development to create an innovative and interactive platform for tracking and comparing feline behavior.",
      imgUrl: cattrack,
      github: "https://github.com/trieut415/CatTrackExtension",
    },
    {
      title: "SmartPill Ingestible Sensor",
      description: "Healthcare IoT",
      longDescription:
        "The SmartPill project demonstrates the design and implementation of an ingestible sensor device capable of capturing, logging, and transmitting biometric data as it passes through the digestive tract. Built on the ESP32 microcontroller within the ESP-IDF framework, this prototype focuses on real-time data collection, conversion to engineering units, and display on a console interface. This proof-of-concept lays the groundwork for innovative medical diagnostic tools by simulating the functionality of a disposable, ingestible sensor.",
      imgUrl: pill,
      github: "https://github.com/trieut415/SmartPill-Ingestible-Sensor",
    },
    {
      title: "Pipelined CPU",
      description: "Hardware Design",
      longDescription:
        "In this project, we enhanced a partially completed 32-bit, 4-stage pipelined datapath by adding functionality to handle data hazards, forwarding, and support for R-Type and I-Type MIPS instructions. The design utilized specific opcode bits to differentiate instruction types and direct ALU operations. Testing involved validating the register file with a variety of testbench inputs to ensure correct parsing and data flow, as well as verifying ALU outputs with hard-coded values for both immediate and register-based operations. Timing diagrams confirmed correct functionality, demonstrating proper data routing through multiplexers for I-Type instructions and accurate data updates for R-Type instructions on the clock's positive edge.",
      imgUrl: pipeline,
      github: "https://github.com/trieut415/Pipelined-CPU",
    },
    {
      title: "Smart Bike Light",
      description: "Hardware Design",
      longDescription:
        "Our project involved designing a hands-free bike light to enhance safety and convenience for bike commuters. The light features adaptive illumination, a light sensor for automatic operation, and an LCD screen displaying additional metrics such as temperature and light levels. It illuminates a ~120° area ahead of the biker and meets key objectives like portability, affordability, and ease of use. Through multiple prototypes and testing, we created a functional and user-friendly solution that aligns with the features of commercial bike lights while adding innovative hands-free functionality.",
      imgUrl: bikelight,
      externalLink:
        "https://drive.google.com/file/d/1wPas-IsWISbkHUZNSf6SxlKLJKtEI6jg/view",
    },
    // **Logic Design Projects Added Below**
    {
      title: "4-Bit Adder-Subtractor ALU",
      description: "Arithmetic Logic Unit Design",
      longDescription:
        "Designed a 4-bit binary adder-subtractor and Arithmetic Logic Unit (ALU) using Verilog. The project features modular components capable of performing arithmetic and logical operations, with thorough testbench validation ensuring functionality and accuracy. The clean, scalable design is optimized for integration and future expansion.",
      imgUrl: alu, // Replace with specific image if available
      github: "https://github.com/trieut415/4-Bit-Adder-Subtractor-ALU",
    },
    {
      title: "Single-Cycle CPU",
      description: "Basic CPU Design with Single-Cycle Architecture",
      longDescription:
        "In this project, we expanded a single-cycle CPU by adding MIPS instructions to enhance functionality. We implemented SLT and ADDI by modifying the ALU and control logic, allowing comparisons and immediate addition. Jump (J) was added with a multiplexer for control flow, while BNE and LUI were supported by extending ALU control bits and adding specific handling for branching and immediate upper-half loading. These improvements increased the CPU’s capability with minimal changes to hardware.",
      imgUrl: single_cycle, // Replace with specific image if available
      github: "https://github.com/trieut415/Single-Cycle-CPU",
    },
    {
      title: "Pipelined-CPU-Added-Functionality",
      description: "Enhanced CPU Pipeline with Additional Features",
      longDescription:
        "In this project, we enhanced a pipelined CPU in Verilog to handle data dependencies through forwarding and additional checks. We implemented 1-ahead and 2-ahead forwarding by adding multiplexers to the ALU inputs, controlled by a forwarding unit that routed data from ID/EX, WriteBackData, and MemAluOut to the appropriate ALU inputs. Arbitration logic was designed to compare register values across pipeline stages (ID/EX, EX/MEM, MEM/WB) and select the correct forwarding path. We also added checks to prevent writes to the $0 register and disabled forwarding for no-write scenarios by evaluating control signals. The synthesized outputs matched the expected values, confirming the functionality of the data forwarding and dependency handling.",
      imgUrl: pipeline, // Replace with specific image if available
      github: "https://github.com/trieut415/Pipelined-CPU-Added-Functionality",
    },
    {
      title: "Multimodal-Counter-FPGA",
      description: "FPGA-Based Multimodal Counter Design",
      longDescription:
        "In this project, we designed and implemented a sequential circuit system using Verilog, focusing on a debouncer, an 8-bit counter, and a 7-segment display driver for the Nexys-A7 FPGA board. The debouncer ensured clean signal transitions for push-button inputs, while the counter incremented accurately with each button press. For the second part, we extended the counter to 16 bits, added a 7-segment display driver to showcase the counter values, and incorporated two modes of operation: manual counting via button press and automatic counting using a 1Hz clock signal. Clock dividers synchronized the design across multiple clock domains, and thorough testing ensured reliable operation across all modules.",
      imgUrl: counter_fpga, // Replace with specific image if available
      github: "https://github.com/trieut415/Multimodal-Counter-FPGA",
    },
    {
      title: "Multimodal Digital Clock",
      description: "Digital Clock Design with Multiple Modes",
      longDescription:
        "The multimodal digital clock, designed for the Nexys A7 Artix-7 FPGA, features four modes: 24-hour clock, 12-hour clock, stopwatch, and timer. Mode selection is handled using a 2-bit switch-controlled multiplexer. Users can set hours, minutes, and seconds with buttons, start or pause the clock, and reset globally to clear stored values. The stopwatch increments time while the start button is held, and the timer counts down from a set value. When connected via VGA, the clock displays time in an hh:mm:ss format, ensuring functionality across all modes.",
      imgUrl: multiclock, // Replace with specific image if available
      github: "https://github.com/trieut415/Multimodal-Digital-Clock",
    },
    {
      title: "Truss Analysis MATLAB",
      description: "Structural Analysis Tool",
      longDescription:
        "This MATLAB project focuses on analyzing stress distribution in truss structures. By inputting the geometry and loading conditions of a truss, the program calculates the internal forces on each member, identifying which components experience the highest stress. This tool provides engineers and designers with valuable insights into structural performance, helping to optimize designs and ensure safety under various load conditions. It combines scientific accuracy with user-friendly functionality, making stress analysis accessible for a range of applications.",
      imgUrl: truss,
      github: "https://github.com/trieut415/Truss-Analysis-MATLAB",
    },
  ];

  const algorithmsProjects = [
    {
      title: "Skip List",
      description: "Efficient Data Structure Implementation",
      longDescription:
        "This file creates a Skip list, which is essentially a series of linked lists that are stacked on top of each other. The top of the skip list contains no numerical elements, and the bottom contains all the inserted elements. As you traverse up levels, certain elements will be eliminated. This skiplist contains the search, insert, and delete functionality.",
      imgUrl: skiplist,
      github: "https://github.com/trieut415/Skip-List",
    },
    {
      title: "Huffman Code",
      description: "Data Compression Algorithm",
      longDescription:
        "These files implement a Huffman tree from a provided map, and prints the generated tree in table format with character and their corresponding huffman code using cpp.",
      imgUrl: huffman,
      github: "https://github.com/trieut415/Huffman-Code",
    },
    {
      title: "Merkle Tree",
      description: "Blockchain and Security",
      longDescription:
        "These files contain an implementation for a Merkle tree using a hash function. This Merkle tree supports data verification, search, insert, and deletes using CPP.",
      imgUrl: merkle,
      github: "https://github.com/trieut415/Merkle-Tree",
    },
    {
      title: "Linked-List",
      description: "Implementation of Linked List Data Structure",
      longDescription:
        "This header file contains a templated Node Class and Linked List class that is able to handle inserts, search, and deletes. The list nodes contain a data field, which also doubles as a key and pointers to all difrections, (up,below,left,right)",
      imgUrl: linkedlist, // Replace with specific image if available
      github: "https://github.com/trieut415/Linked-List",
    },
  ];

  // State for Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Explore my projects</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Machine Learning & Applications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Embedded Systems & Logic Design
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Algorithms & Data Structures
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {machineLearningProjects.map(
                            (project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() =>
                                  handleCardClick(project)
                                }
                              />
                            )
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {embeddedSystemsProjects.map(
                            (project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() =>
                                  handleCardClick(project)
                                }
                              />
                            )
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {algorithmsProjects.map(
                            (project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() =>
                                  handleCardClick(project)
                                }
                              />
                            )
                          )}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
        className="custom-modal"
        animation={true}
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content-wrapper">
                <img
                  src={selectedProject.imgUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                />
                <div className="modal-description">
                  <p>{selectedProject.longDescription}</p>
                  {/* Add more details if necessary */}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* Conditionally render GitHub Button */}
              {selectedProject.github && (
                <Button
                  variant="primary"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              )}
              {/* Conditionally render External Link Button */}
              {selectedProject.externalLink && (
                <Button
                  variant="success"
                  href={selectedProject.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              )}
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
