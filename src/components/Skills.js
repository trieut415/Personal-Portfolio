import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import python from "../assets/img/python.png";
import c from "../assets/img/c.png";
import cpp from "../assets/img/cpp.png";
import csharp from "../assets/img/csharp.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import swift from "../assets/img/swift.png";
import verilog from "../assets/img/verilog.png";
import matlab from "../assets/img/matlab.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import tensorflow from "../assets/img/tensorflow.png";
import pytorch from "../assets/img/pytorch.png";
import onnx from "../assets/img/onnx.png";
import hailo from "../assets/img/hailo.png";
import netron from "../assets/img/netron.png";
import github from "../assets/img/github.png";
import git from "../assets/img/git.png";
import docker from "../assets/img/docker.png";
import colab from "../assets/img/colab.png";
import jupyter from "../assets/img/jupyter.png";
import rpi from "../assets/img/rpi.png";
import espressif from "../assets/img/espressif.png";
import arduino from "../assets/img/arduino.png";
import nvidia from "../assets/img/nvidia.png";
import intel from "../assets/img/intel.png";
import ubuntu from "../assets/img/ubuntu.png";
import windows from "../assets/img/windows.png";
import mac from "../assets/img/mac.png";
import onshape from "../assets/img/onshape.png";

export const Skills = () => {
  // Skills categorized into sections
  const skills = {
    "Programming Languages": [
      { title: "C", url: "https://en.cppreference.com/w/c", imgSrc: c },
      { title: "C++", url: "https://isocpp.org/", imgSrc: cpp },
      { title: "C#", url: "https://dotnet.microsoft.com/en-us/languages/csharp", imgSrc: csharp },
      { title: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", imgSrc: css },
      { title: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", imgSrc: html },
      { title: "Java", url: "https://www.java.com/", imgSrc: java },
      { title: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", imgSrc: javascript },
      { title: "MATLAB", url: "https://www.mathworks.com/products/matlab.html", imgSrc: matlab },
      { title: "Python", url: "https://www.python.org/", imgSrc: python },
      { title: "Swift", url: "https://swift.org/", imgSrc: swift },
      { title: "Verilog", url: "https://en.wikipedia.org/wiki/Verilog", imgSrc: verilog },
    ],
    "Machine Learning": [
      { title: "Hailo", url: "https://hailo.ai/", imgSrc: hailo },
      { title: "Netron", url: "https://netron.app/", imgSrc: netron },
      { title: "ONNX", url: "https://onnx.ai/", imgSrc: onnx },
      { title: "PyTorch", url: "https://pytorch.org/", imgSrc: pytorch },
      { title: "TensorFlow", url: "https://www.tensorflow.org/", imgSrc: tensorflow },
    ],
    "Development Tools": [
      { title: "Docker", url: "https://www.docker.com/", imgSrc: docker },
      { title: "Git", url: "https://git-scm.com/", imgSrc: git },
      { title: "GitHub", url: "https://github.com/nhathout", imgSrc: github },
      { title: "Google Colab", url: "https://colab.research.google.com/", imgSrc: colab },
      { title: "Jupyter", url: "https://jupyter.org/", imgSrc: jupyter },
      { title: "Onshape", url: "https://www.onshape.com/", imgSrc: onshape },
    ],
    "Hardware and Embedded Systems": [
      { title: "Arduino", url: "https://www.arduino.cc/", imgSrc: arduino },
      { title: "Espressif (ESP)", url: "https://www.espressif.com/", imgSrc: espressif },
      { title: "Intel", url: "https://www.intel.com/", imgSrc: intel },
      { title: "NVIDIA", url: "https://www.nvidia.com/", imgSrc: nvidia },
      { title: "Raspberry Pi", url: "https://www.raspberrypi.org/", imgSrc: rpi },
    ],
    "Operating Systems": [
      { title: "macOS", url: "https://www.apple.com/macos/", imgSrc: mac },
      { title: "Ubuntu", url: "https://ubuntu.com/", imgSrc: ubuntu },
      { title: "Windows", url: "https://www.microsoft.com/windows", imgSrc: windows },
    ],
  };

  return (
    <section className="skill" id="skills">
      <h2>Skills</h2>
      <p>A showcase of tools, technologies, and platforms I’ve worked with.</p>
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index}>
          <h3 className="skill-category-title">{category}</h3>
          <div className="skill-bx">
            <div className="skill-grid">
              {skillList.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <a href={skill.url} target="_blank" rel="noopener noreferrer">
                    <img src={skill.imgSrc} alt={skill.title} />
                  </a>
                  <h5>{skill.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
