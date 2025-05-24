import React from 'react';
import './index.css';
import { DiCss3, DiDocker, DiGit, DiHtml5, DiJavascript, DiMongodb, DiMysql, DiPython, DiReact } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
import { GrGraphQl } from 'react-icons/gr';
import { SiDocker, SiSocketdotio } from 'react-icons/si';

const SkillList = () => {
  const skills = [
    { name: 'JavaScript', icon: <DiJavascript size={40} /> },
    // { name: 'PHP', icon: <PHP /> },
    { name: 'Python (basic)', icon: <DiPython size={40} /> },
    { name: 'HTML', icon: <DiHtml5 size={40} /> },
    { name: 'CSS', icon: <DiCss3 size={40} /> },
    { name: 'React.js', icon: <DiReact size={40} /> },
    { name: 'Next.js', icon: <RiNextjsFill size={40} /> },
    { name: 'MySQL', icon: <DiMysql size={40} /> },
    { name: 'MongoDB', icon: <DiMongodb size={40}/> },
    { name: 'Docker', icon: <DiDocker size={40}/> },
    { name: 'Git', icon: <DiGit size={40}/> },
    { name: 'GraphQL', icon: <GrGraphQl size={40}/> },
    { name: 'WebSocket', icon: <SiSocketdotio size={40}/> },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="division"></div>
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillList;
