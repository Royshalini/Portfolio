import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isClickingNav, setIsClickingNav] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsClickingNav(true);
    setMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        setActiveSection(sectionId);
        setIsClickingNav(false);
      }, 600);
    }
  };

  useEffect(() => {
    if (isClickingNav) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let currentSection = "home";

      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 250;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      if (scrollY === 0) {
        currentSection = "home";
      }

      if (scrollY + windowHeight >= pageHeight - 10) {
        currentSection = "contact";
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isClickingNav]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.title} href="#" onClick={(e) => e.preventDefault()}>
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("/assets/nav/closeIcon.png")
              : getImageUrl("/assets/nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {["home", "about", "experience", "projects", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? styles.activeLink : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
