import { Logo } from "../../constants/svglocations";
import React, { useEffect, useState } from "react";

const TagzeroNav = (props) => {
  const [active, setactive] = useState();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to handle navbar collapse
  const navclass = `nav-link navfont navtextclr`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (active === entry.target.id) return;
          setactive(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = [
      props.aboutUs.current,
      props.services.current,
      props.howWeWork.current,
      props.caseStudy.current,
      props.imagesec.current,
    ];
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [active, props]);

  // Handle toggling of the navbar collapse
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Close the navbar when a link is clicked
  const handleNavLinkClick = (sectionRef, id) => {
    setactive(id);
    props.scrollToSection(sectionRef);
    setIsNavbarOpen(false); // Close the navbar after a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbgclr sticky-sm-top">
      <div className="container-fluid d-flex justify-content-around pt-3 mx-lg-5">
        <a className="navbar-brand" href="#">
          <Logo />
        </a>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Toggle the navbar on button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible part of the navbar */}
        <div
          className={`collapse navbar-collapse justify-content-center ${isNavbarOpen ? 'show' : ''}`}
        >
          <div className="navbar-nav">
            <a
              className={navclass}
              style={{
                color: active === "1" ? "#03BF71" : null,
              }}
              onClick={() => handleNavLinkClick(props.aboutUs, "1")}
            >
              About Us
            </a>
            <a
              className={navclass}
              style={{
                color: active === "2" ? "#03BF71" : null,
              }}
              onClick={() => handleNavLinkClick(props.services, "2")}
            >
              Services
            </a>
            <a
              className={navclass}
              style={{
                color: active === "3" ? "#03BF71" : null,
              }}
              onClick={() => handleNavLinkClick(props.howWeWork, "3")}
            >
              How We Work
            </a>
            <a
              className={navclass}
              style={{
                color: active === "4" ? "#03BF71" : null,
              }}
              onClick={() => handleNavLinkClick(props.caseStudy, "4")}
            >
              Case Study
            </a>
          </div>
        </div>

        <button
          type="button"
          className="btn buttoncolor"
          onClick={() => props.onModalClick(true)}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default TagzeroNav;
