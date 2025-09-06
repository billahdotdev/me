"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import ScrollAnimation from "../components/ScrollAnimation"
import Card from "../components/Card"
import Modal from "../components/Modal"
import Button from "../components/Button"
import webDevAnimation from "../assets/web-dev-animation.json"
import "./Services.css"

const Services = () => {
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

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies to provide optimal performance and user experience.",
      icon: <i className="fas fa-code"></i>,
      details:
        "My web development services include creating responsive, fast-loading websites that work seamlessly across all devices. I use modern frameworks like React and Vue.js, combined with clean, semantic HTML and CSS to build websites that not only look great but also perform exceptionally well. Each project is optimized for search engines and accessibility, ensuring your site reaches the widest possible audience.",
    },
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern JavaScript frameworks.",
      icon: <i className="fas fa-laptop-code"></i>,
      details:
        "As a frontend specialist, I transform designs into fully functional, interactive interfaces. I focus on creating smooth animations, intuitive navigation, and responsive layouts that adapt to any screen size. Using React, I build component-based UIs that are both maintainable and scalable. I pay special attention to performance optimization, ensuring fast load times and smooth interactions even on complex applications.",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences that keep visitors coming back.",
      icon: <i className="fas fa-paint-brush"></i>,
      details:
        "My UI/UX design process begins with understanding your users and their needs. I create wireframes and prototypes to test ideas before moving to high-fidelity designs. I focus on creating intuitive navigation, clear visual hierarchies, and engaging interactions that guide users naturally through your application. Every design decision is made with both aesthetics and usability in mind, resulting in interfaces that are both beautiful and functional.",
    },
    {
      title: "E-commerce Solutions",
      description: "Building online stores with secure payment gateways and user-friendly shopping experiences.",
      icon: <i className="fas fa-shopping-cart"></i>,
      details:
        "I develop e-commerce solutions that help businesses sell products online effectively. From product catalogs and shopping carts to secure checkout processes and payment gateway integrations, I handle all aspects of e-commerce development. My solutions include inventory management, order tracking, customer accounts, and analytics to help you understand your sales patterns. I ensure your online store is not only secure but also optimized for conversions.",
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed and performance for better user experience and SEO rankings.",
      icon: <i className="fas fa-tachometer-alt"></i>,
      details:
        "Website performance directly impacts user experience and search engine rankings. My optimization services include code minification, image optimization, lazy loading, caching strategies, and server-side improvements. I use tools like Lighthouse and WebPageTest to identify performance bottlenecks and systematically address them. The result is a faster, more efficient website that keeps users engaged and improves conversion rates.",
    },
    {
      title: "CMS Integration",
      description: "Integrating content management systems to make website updates easy and efficient.",
      icon: <i className="fas fa-file-alt"></i>,
      details:
        "I integrate and customize content management systems that make updating your website simple and intuitive. Whether you need a custom WordPress theme, a headless CMS setup with Strapi or Contentful, or a completely custom solution, I can help. My CMS implementations include user role management, custom fields and content types, and intuitive editing interfaces that empower your team to manage content without technical knowledge.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business, goals, and requirements to create a tailored solution.",
    },
    {
      number: "02",
      title: "Planning",
      description: "Developing a strategic plan, timeline, and technical specifications for your project.",
    },
    {
      number: "03",
      title: "Design",
      description: "Creating wireframes and visual designs that align with your brand and user expectations.",
    },
    {
      number: "04",
      title: "Development",
      description: "Building your website or application with clean, efficient, and maintainable code.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing across devices and browsers to ensure everything works perfectly.",
    },
    {
      number: "06",
      title: "Launch",
      description: "Deploying your project and ensuring a smooth transition to the live environment.",
    },
  ]

  return (
    <motion.div className="services-page" initial="initial" animate="in" exit="exit" variants={pageVariants}>
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <ScrollAnimation animation="fadeInLeft">
              <div className="services-hero-text">
                <h1 className="section-title">My Services</h1>
                <p className="hero-description">
                  I offer a wide range of web development services to help businesses establish a strong online
                  presence. From responsive websites to complex web applications, I deliver solutions that are tailored
                  to your specific needs and goals.
                </p>
                <Button type="primary" size="large">
                  Get Started
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <div className="services-hero-animation">
                <Lottie animationData={webDevAnimation} loop={true} className="lottie-animation" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">What I Offer</h2>
          </ScrollAnimation>

          <div className="services-grid">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
                onClick={() => openModal(service.title, service.details)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">My Process</h2>
            <p className="section-description">
              I follow a structured approach to ensure every project is completed efficiently and meets the highest
              standards of quality.
            </p>
          </ScrollAnimation>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <ScrollAnimation key={index} animation="fadeInUp" delay={index * 0.2} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Pricing Plans</h2>
            <p className="section-description">
              Flexible pricing options to suit different project requirements and budgets.
            </p>
          </ScrollAnimation>

          <div className="pricing-cards">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">499</span>
                  </div>
                  <p>Perfect for small businesses</p>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>Responsive Website Design</li>
                    <li>Up to 5 Pages</li>
                    <li>Basic SEO Setup</li>
                    <li>Contact Form</li>
                    <li>Mobile Friendly</li>
                    <li className="not-included">CMS Integration</li>
                    <li className="not-included">E-commerce Functionality</li>
                    <li className="not-included">Custom Animations</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Button type="secondary">Choose Plan</Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div className="pricing-card featured">
                <div className="pricing-badge">Popular</div>
                <div className="pricing-header">
                  <h3>Professional</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">999</span>
                  </div>
                  <p>Ideal for growing businesses</p>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>Responsive Website Design</li>
                    <li>Up to 10 Pages</li>
                    <li>Advanced SEO Setup</li>
                    <li>Contact Form</li>
                    <li>Mobile Friendly</li>
                    <li>CMS Integration</li>
                    <li className="not-included">E-commerce Functionality</li>
                    <li className="not-included">Custom Animations</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Button type="primary">Choose Plan</Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.6}>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">1999</span>
                  </div>
                  <p>For businesses needing more</p>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>Responsive Website Design</li>
                    <li>Unlimited Pages</li>
                    <li>Advanced SEO Setup</li>
                    <li>Contact Form</li>
                    <li>Mobile Friendly</li>
                    <li>CMS Integration</li>
                    <li>E-commerce Functionality</li>
                    <li>Custom Animations</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Button type="secondary">Choose Plan</Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeInUp" delay={0.8}>
            <div className="custom-quote">
              <p>Need a custom solution? Contact me for a personalized quote.</p>
              <Button type="accent">Get Custom Quote</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <p>{modalContent.content}</p>
      </Modal>
    </motion.div>
  )
}

export default Services

