"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ScrollAnimation from "../components/ScrollAnimation"
import AnimatedText from "../components/AnimatedText"
import Button from "../components/Button"
import Modal from "../components/Modal"
import "./About.css"

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "" })

  const openModal = (title, content) => {
    setModalContent({ title, content })
    setIsModalOpen(true)
  }

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description:
        "Leading the frontend development team, implementing modern web technologies, and optimizing user experiences across multiple platforms.",
      details:
        "As the Senior Frontend Developer at Tech Innovations Inc., I lead a team of 5 developers working on cutting-edge web applications. My responsibilities include architecture planning, code reviews, mentoring junior developers, and implementing best practices. I've successfully delivered projects for major clients, resulting in a 40% increase in user engagement and a 25% improvement in conversion rates.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications using React, JavaScript, and CSS for various clients across different industries.",
      details:
        "At Digital Solutions Ltd., I was responsible for building responsive websites and web applications for clients in finance, healthcare, and e-commerce. I worked closely with designers and backend developers to create seamless user experiences. Key achievements include reducing load times by 60% through code optimization and implementing a component library that increased development efficiency by 35%.",
    },
    {
      title: "Junior Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Started as a junior developer working on frontend implementations, bug fixes, and feature enhancements for client websites.",
      details:
        "I began my professional journey at WebCraft Agency as a Junior Developer, where I gained hands-on experience with HTML, CSS, JavaScript, and various frontend frameworks. I collaborated with senior developers on client projects, fixed bugs, implemented new features, and gradually took on more responsibilities. This role provided me with a solid foundation in web development practices and teamwork.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
      details:
        "During my Master's program, I focused on advanced topics in Human-Computer Interaction, Web Technologies, and Software Engineering. My thesis explored innovative approaches to responsive web design, which was later published in a peer-reviewed journal. I also participated in several research projects and served as a teaching assistant for undergraduate web development courses.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2010 - 2014",
      description: "Graduated with honors, focusing on software development and design.",
      details:
        "My undergraduate studies provided me with a strong foundation in computer science principles, algorithms, data structures, and programming languages. I was an active member of the university's coding club and participated in several hackathons, winning first place in the university's annual coding competition. My senior project involved developing a web application for student resource management, which was adopted by the university for internal use.",
    },
  ]

  return (
    <motion.div className="about-page" initial="initial" animate="in" exit="exit" variants={pageVariants}>
      <section className="about-hero">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h1 className="section-title">About Me</h1>
          </ScrollAnimation>

          <div className="about-content">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="about-image">
                <img src="/placeholder.svg?height=500&width=400" alt="John Doe" />
                <div className="image-overlay"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <div className="about-text">
                <AnimatedText text="Passionate Web Developer & Digital Creator" className="about-subtitle" />

                <p>
                  Hello! I'm John Doe, a passionate web developer with over 5 years of experience in creating beautiful,
                  functional, and user-centered digital experiences. Based in New York City, I'm dedicated to crafting
                  websites and applications that not only meet but exceed client expectations.
                </p>

                <p>
                  My journey in web development began during my college years, and since then, I've been continuously
                  learning and adapting to new technologies and methodologies. I believe that great design is about more
                  than just aesthetics – it's about creating intuitive, enjoyable experiences for users.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through blog posts and community events. I'm always open to new challenges and
                  opportunities to grow as a developer.
                </p>

                <div className="about-stats">
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>

                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>

                  <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                </div>

                <div className="about-buttons">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button type="primary">Download Resume</Button>
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Work Experience</h2>
          </ScrollAnimation>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <ScrollAnimation
                key={index}
                animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={index * 0.2}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{exp.period}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p>{exp.description}</p>
                  <Button
                    type="secondary"
                    size="small"
                    onClick={() => openModal(`${exp.title} at ${exp.company}`, exp.details)}
                  >
                    Read More
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Education</h2>
          </ScrollAnimation>

          <div className="education-cards">
            {education.map((edu, index) => (
              <ScrollAnimation key={index} animation="zoomIn" delay={index * 0.2} className="education-card">
                <div className="education-year">{edu.year}</div>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.description}</p>
                <Button type="secondary" size="small" onClick={() => openModal(edu.degree, edu.details)}>
                  Read More
                </Button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">My Skills</h2>
          </ScrollAnimation>

          <div className="skills-container">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="skills-category">
                <h3>Frontend Development</h3>
                <div className="skills-grid">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Vue.js",
                    "SASS/SCSS",
                    "Responsive Design",
                    "Framer Motion",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-tag"
                      whileHover={{ scale: 1.05, backgroundColor: "var(--primary-color)" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <div className="skills-category">
                <h3>Backend Development</h3>
                <div className="skills-grid">
                  {["Node.js", "Express", "MongoDB", "Firebase", "RESTful APIs", "GraphQL", "SQL", "PHP"].map(
                    (skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-tag"
                        whileHover={{ scale: 1.05, backgroundColor: "var(--secondary-color)" }}
                      >
                        {skill}
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <div className="skills-category">
                <h3>Tools & Others</h3>
                <div className="skills-grid">
                  {["Git", "Webpack", "Figma", "Adobe XD", "VS Code", "Jest", "Docker", "CI/CD"].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-tag"
                      whileHover={{ scale: 1.05, backgroundColor: "var(--accent-color)", color: "#000" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <p>{modalContent.content}</p>
      </Modal>
    </motion.div>
  )
}

export default About

