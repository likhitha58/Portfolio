import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaPython,FaServer  } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript, SiBootstrap,SiFigma,SiPhp} from 'react-icons/si';
import '../styles/TechStack.css';

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "Express", icon: <SiExpress />, color: "#fff" },
  { name: "MS SQL Server", icon: <FaServer />, color: "#CC2927" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "PHP", icon: <SiPhp />, color: "#8892BE" },
  // { name: "SQL", icon: <FaDatabase />, color: "#f29111" },
  // { name: "Python", icon: <FaPython />, color: "#3776AB" },
  // { name: "HTML5", icon: <SiHtml5 />, color: "#e34c26" },
  // { name: "CSS3", icon: <SiCss3 />, color: "#264de4" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#7952B3"
  },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },

];

export default function TechStack() {
  return (
    <section id="techstack" className="techstack-section">
      <h2>Tech Stack</h2>
      <div className="techstack-grid">
        {techStack.map((tech, idx) => (
          <div key={idx} className="tech-card">
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
