"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Lottie from "lottie-react"
import AnimatedText from "../components/AnimatedText"
import ScrollAnimation from "../components/ScrollAnimation"
import Button from "../components/Button"
import developerAnimation from "../assets/developer-animation.json"
import "./Home.css"

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateMovement = (x, y, factor = 0.05) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const deltaX = (x - centerX) * factor
    const deltaY = (y - centerY) * factor

    return { x: deltaX, y: deltaY }
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

  return (
    <motion.div className="home-page" initial="initial" animate="in" exit="exit" variants={pageVariants}>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="greeting">Hello, I'm</span>
              </motion.div>

              <AnimatedText text="John Doe" type="character" className="hero-name" />

              <AnimatedText text="Creative Web Developer" className="hero-title" />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="hero-description"
              >
                I build exceptional digital experiences that inspire and engage users. Specializing in modern web
                technologies to create stunning websites and applications.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link to="/works">
                  <Button type="primary">View My Work</Button>
                </Link>
                <Link to="/contact">
                  <Button type="secondary">Contact Me</Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="hero-image"
              style={{
                x: calculateMovement(mousePosition.x, mousePosition.y).x,
                y: calculateMovement(mousePosition.x, mousePosition.y).y,
              }}
              transition={{ type: "spring", stiffness: 75, damping: 30, mass: 0.5 }}
            >
              <Lottie animationData={developerAnimation} loop={true} className="lottie-animation" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <span>Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </section>

      <section className="home-about">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">About Me</h2>
          </ScrollAnimation>

          <div className="home-about-content">
            <ScrollAnimation animation="fadeInLeft" delay={0.2}>
              <div className="home-about-text">
                <p>
                  I'm a passionate web developer with a strong focus on creating intuitive and engaging user
                  experiences. With expertise in modern frontend technologies, I bring ideas to life through clean code
                  and creative solutions.
                </p>
                <p>
                  My approach combines technical excellence with an eye for design, ensuring that every project not only
                  functions flawlessly but also looks stunning.
                </p>
                <Link to="/about">
                  <Button type="secondary">Learn More</Button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <div className="home-about-skills">
                <div className="skill-item">
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">CSS/SASS</div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <ScrollAnimation animation="zoomIn">
            <div className="cta-content">
              <h2>Ready to start your project?</h2>
              <p>Let's work together to create something amazing.</p>
              <Link to="/contact">
                <Button type="accent" size="large">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </motion.div>
  )
}

export default Home

