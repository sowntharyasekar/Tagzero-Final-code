import { Logo } from "../../constants/svglocations";
import React, { useEffect, useState } from "react";
const TagzeroNav = (props) => {
  const [active, setactive] = useState();
  const navclass = `nav-link   navfont navtextclr`;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id)
          if (active == entry.target.id)
            return
          setactive(entry.target.id);
        }

      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    const sections = [props.aboutUs.current, props.services.current, props.howWeWork.current, props.caseStudy.current, props.imagesec.current];
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);


  return (
    <nav class="navbar navbar-expand-lg navbgclr sticky-sm-top">
      <div class="container-fluid d-flex justify-content-around pt-2">
        <a class="navbar-brand" href="#">
          <Logo></Logo>
        </a>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

        <div class="navbar-nav navbgclr">
          <a

            class={navclass}
            style={{
              color: active == "1" ? "#03BF71" : null,
            }}
            onClick={() => {
              setactive("1");
              props.scrollToSection(props.aboutUs);
            }}
          >
            About Us
          </a>
          <a
            class={navclass}
            style={{
              color: active == 2 ? "#03BF71" : null,
            }}
            onClick={() => {
              setactive(2);

              props.scrollToSection(props.services);
            }}
          >
            Services
          </a>
          <a
            class={navclass}
            style={{
              color: active == 3 ? "#03BF71" : null,
            }}
            onClick={() => {
              setactive(3);

              props.scrollToSection(props.howWeWork);
            }}
          >
            How We Work
          </a>
          <a
            class={navclass}
            style={{
              color: active == 4 ? "#03BF71" : null,
            }}
            onClick={() => {
              setactive(4);

              props.scrollToSection(props.caseStudy);
            }}
          >
            Case Study
          </a>
        </div>
        <button type="button" class="btn buttoncolor" onClick={()=>props.onModalClick(true)} >
          Contact Us
        </button> 
      </div>
    </nav>
  );
};
export default TagzeroNav;
