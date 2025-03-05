"use client"

import { useState, useRef, useEffect } from "react"
import Header from "./Header"
import AboutSection from "./AboutSection"
import ServicesSection from "./ServicesSection"
import ResourcesSection from "./ResourcesSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"

const Layout = () => {
  const [activeSection, setActiveSection] = useState("about")
  const [isIntersecting, setIsIntersecting] = useState({})
  const sectionRefs = useRef({})

  const sections = [
    { id: "about", title: "Who Am I?" },
    { id: "services", title: "What Do I Do?" },
    { id: "resources", title: "Resources" },
    { id: "contact", title: "Contact" },
  ]

  // Update the handleNavClick function for smoother scrolling
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    // Smooth scroll to the section with offset
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Update the useEffect hook to improve transitions
  useEffect(() => {
    const observers = {}

    sections.forEach((section) => {
      const ref = sectionRefs.current[section.id]
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting((prev) => ({
              ...prev,
              [section.id]: entry.isIntersecting,
            }))

            // Auto-update active section based on scroll
            if (entry.isIntersecting) {
              setActiveSection(section.id)
            }
          },
          { threshold: 0.3, rootMargin: "-100px 0px" }, // Adjusted rootMargin for smoother transitions
        )

        observer.observe(ref)
        observers[section.id] = observer
      }
    })

    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth"

    // Cleanup
    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect()
      })
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="portfolio-container">
      <Header sections={sections} activeSection={activeSection} onNavClick={handleNavClick} />

      <main className="content">
        <div
          id="section-about"
          ref={(el) => (sectionRefs.current.about = el)}
          className={`section fade-in ${isIntersecting.about ? "visible" : ""}`}
        >
          <AboutSection />
        </div>

        <div
          id="section-services"
          ref={(el) => (sectionRefs.current.services = el)}
          className={`section fade-in ${isIntersecting.services ? "visible" : ""}`}
        >
          <ServicesSection />
        </div>

        <div
          id="section-resources"
          ref={(el) => (sectionRefs.current.resources = el)}
          className={`section fade-in ${isIntersecting.resources ? "visible" : ""}`}
        >
          <ResourcesSection />
        </div>

        <div
          id="section-contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className={`section fade-in ${isIntersecting.contact ? "visible" : ""}`}
        >
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout

