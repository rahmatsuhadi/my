import React from 'react';
import './index.css';

const About = () => {
    return (
        <section className="about-section" id="about">
             <div className="division"></div>
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
                I’m a passionate and growth-driven Frontend Developer with a solid understanding of HTML, CSS, and JavaScript. I also have experience working with backend technologies such as PHP and a bit of Python, which helps me understand how both sides of web development interact.
            </p>
            <p className="about-description">
                I'm comfortable working with modern tools and technologies like MySQL, MongoDB, REST APIs, GraphQL, Docker, Git, and WebSockets. I enjoy building scalable, maintainable interfaces using frameworks like Next.js, and I'm always exploring new techniques to improve performance, usability, and accessibility.
            </p>
            <p className="about-description">
                I’m committed to continuous learning, writing clean code, and collaborating with others to build impactful and innovative digital experiences.
            </p>
        </section>
    );
};

export default About;
