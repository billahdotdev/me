"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimation from "../components/ScrollAnimation"
import Modal from "../components/Modal"
import Button from "../components/Button"
import "./Works.css"

const Works = () => {
  const [filter, setFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com",
      details:
        "This e-commerce platform was built for a fashion retailer looking to expand their online presence. The project included a responsive frontend built with React, a Node.js backend with Express, and MongoDB for data storage. Key features include product filtering and sorting, user accounts, wishlist functionality, shopping cart, and secure checkout with Stripe integration. The site also includes an admin dashboard for inventory management and order processing.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "A creative portfolio website for a photographer with image galleries and contact form.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://example.com",
      details:
        "This portfolio website was designed for a professional photographer to showcase their work. The site features a minimalist design that puts the focus on the photography, with smooth transitions and animations to enhance the viewing experience. It includes multiple gallery layouts, a blog section, and a contact form with validation. The site is fully responsive and optimized for fast loading, even with high-resolution images.",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "A mobile banking application with secure authentication and transaction history.",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "https://example.com",
      details:
        "This mobile banking application was developed for a fintech startup to provide users with a seamless banking experience on their mobile devices. Built with React Native for cross-platform compatibility, the app includes secure biometric authentication, real-time transaction tracking, budget management tools, and bill payment functionality. Firebase was used for the backend, providing real-time data synchronization and secure user authentication. The app also features push notifications for transaction alerts and personalized financial insights.",
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "An online reservation system for restaurants with table management and customer notifications.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "https://example.com",
      details:
        "This restaurant booking system was created for a chain of high-end restaurants to streamline their reservation process. The system includes a customer-facing booking interface with real-time availability, a staff dashboard for managing reservations and tables, and an automated notification system for confirmations and reminders. Built with Vue.js for the frontend and Express with PostgreSQL for the backend, the application handles complex booking logic including table assignments, special requests, and waiting lists. The system has helped the client reduce no-shows by 35% and improve table turnover rates.",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "A fitness tracking application with workout plans, progress tracking, and social features.",
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      link: "https://example.com",
      details:
        "This fitness tracking app was developed to help users monitor their workouts, track progress, and stay motivated. Built with Flutter for a native-like experience on both iOS and Android, the app includes features such as customizable workout plans, exercise demonstrations with videos, progress tracking with charts and statistics, and social sharing capabilities. The app integrates with Google Fit and Apple Health for comprehensive health data tracking and uses Firebase for backend services including user authentication and real-time data storage.",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "A real estate listing platform with property search, filtering, and agent contact features.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      link: "https://example.com",
      details:
        "This real estate platform was built for a property management company to showcase their listings and connect potential buyers with agents. The site features an advanced search and filtering system, interactive property maps using Google Maps API, virtual tours, and detailed property information. The platform includes a user dashboard for saved searches and favorites, agent profiles and contact forms, and a content management system for easy listing updates. The responsive design ensures a seamless experience across all devices, from desktop to mobile.",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <motion.div className="works-page" initial="initial" animate="in" exit="exit" variants={pageVariants}>
      <section className="works-hero">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h1 className="section-title">My Work</h1>
            <p className="section-description">
              Check out some of my recent projects. Each project is unique and built with attention to detail and user
              experience.
            </p>
          </ScrollAnimation>

          <div className="filter-buttons">
            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <Button type={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
                All
              </Button>
              <Button type={filter === "web" ? "primary" : "secondary"} onClick={() => setFilter("web")}>
                Web
              </Button>
              <Button type={filter === "mobile" ? "primary" : "secondary"} onClick={() => setFilter("mobile")}>
                Mobile
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <div className="project-image">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} />
                    <div className="project-overlay">
                      <Button type="accent" onClick={() => openProjectModal(project)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="cta-content">
              <h2>Have a project in mind?</h2>
              <p>Let's discuss how I can help bring your ideas to life.</p>
              <Button type="primary" size="large">
                Contact Me
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedProject?.title || ""}>
        {selectedProject && (
          <div className="project-modal-content">
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-details">
              <p className="modal-description">{selectedProject.details}</p>
              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <Button type="primary">Visit Project</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  )
}

export default Works

