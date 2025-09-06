"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScrollAnimation from "../components/ScrollAnimation"
import Button from "../components/Button"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: "Sending message..." })

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully! I will get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 2000)
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

  const contactInfo = [
    {
      icon: <i className="fas fa-envelope"></i>,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: <i className="fas fa-phone"></i>,
      title: "Phone",
      content: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <i className="fas fa-map-marker-alt"></i>,
      title: "Location",
      content: "New York, NY, USA",
      link: "https://maps.google.com",
    },
  ]

  return (
    <motion.div className="contact-page" initial="initial" animate="in" exit="exit" variants={pageVariants}>
      <section className="contact-hero">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-description">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                  Feel free to reach out through any of the following channels. I'm always open to discussing new
                  projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="contact-cards">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-card"
                      whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-icon">{info.icon}</div>
                      <div className="card-content">
                        <h3>{info.title}</h3>
                        <p>{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-links">
                  <h3>Connect With Me</h3>
                  <div className="social-icons">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: "#00ffcc" }}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: "#00ffcc" }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </motion.a>
                    <motion.a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: "#00ffcc" }}
                    >
                      <i className="fab fa-twitter"></i>
                    </motion.a>
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, color: "#00ffcc" }}
                    >
                      <i className="fab fa-instagram"></i>
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <div className="contact-form-container">
                <h2>Send Me a Message</h2>

                {formStatus.submitted && (
                  <motion.div
                    className={`form-message ${formStatus.success ? "success" : ""}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <Button type="primary" size="large" disabled={formStatus.submitted && !formStatus.success}>
                    {formStatus.submitted && !formStatus.success ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Find Me Here</h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564749872!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact

