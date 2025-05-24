import React from 'react';
import './index.css';

const experiences = [
  {
    title: "Frontend Developer ",
    company: "PT Carakan Sadha Dirgantara",
    location: "Yogyakarta, Indonesia",
    period: "Jan 2022 – Present",
    description: "Assisted in building responsive user interfaces using React and Tailwind CSS. Collaborated with backend team to integrate REST APIs and handled component-level state management."
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 – Present",
    description: "Worked on various freelance projects, building custom websites and dashboards using Next.js, PHP, and MySQL. Delivered fully responsive and accessible interfaces with clean code."
  }
];

const education = [
     {
    degree: "Vocational High School (SMK) - Software Engineering (RPL)",
    school: "SMK N 1 Bantul",
    location: "Yogyakarta, Indonesia",
    period: "2019 – 2022",
    description: "Specialized in software development including programming, web design, database management, and basic network administration."
  },
 {
    degree: "Associate Degree in Informatics Engineering (D3)",
    school: "Universitas Amikom Yogyakara",
    location: "Yogyakarta, Indonesia",
    period: "2023 – Present",
    description: "Currently in 3rd semester, learning web development, programming fundamentals, databases, and network systems. Focused on frontend development with interest in full-stack technologies."
  }
];

const ExperienceEducation = () => {
  return (
    <section className="exp-edu-section" id="experience">
        <div className="division"></div>
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {experiences.map((exp, index) => (
          <div className="exp-item" key={index}>
            <h3>{exp.title}</h3>
            <span className="exp-company">{exp.company} — {exp.location}</span>
            <span className="exp-period">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {education.map((edu, index) => (
          <div className="edu-item" key={index}>
            <h3>{edu.degree}</h3>
            <span className="edu-school">{edu.school} — {edu.location}</span>
            <span className="edu-period">{edu.period}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;
