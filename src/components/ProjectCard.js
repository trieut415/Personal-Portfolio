// ProjectCard.js
import { Col } from "react-bootstrap";
import "./Projects.css"; // Create this CSS file for styling

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="description">{description}</span>
        </div>
      </div>
    </Col>
  );
};
