import TagzeroNav from "./TagzeroNav";
import React, { useRef,useState } from "react";
import { Backgroundimage } from "../../constants/svglocations";
import AboutUs from "../../StaticComponents/AboutUs";
import Service from "../../StaticComponents/Services";
import HowWeWork from "../../StaticComponents/HowWeWork";
import Casestudies from "../../StaticComponents/Casestudies";
import Footer from "../../StaticComponents/Footer";
import ContactUsModal from "../../StaticComponents/ContactUsModal";

const Tagzero = () => {
    const aboutUs = useRef(null);
    const services = useRef(null);
    const howWeWork = useRef(null);
    const caseStudy = useRef(null);
    const imagesec = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const [showModal, setShowModal] = useState(false);

    const showContactModal = () =>{
        setShowModal(true)
    }
    const updateModal =(status)=>{
        setShowModal(status)
    }
    return (
        <>
            {/* // Navbar */}
            <TagzeroNav scrollToSection={scrollToSection} aboutUs={aboutUs} services={services} howWeWork={howWeWork} caseStudy={caseStudy} imagesec={imagesec} onModalClick={showContactModal} />
            {/* // Backgroundimage */}

            <Backgroundimage className="responsive-image"></Backgroundimage>
            <div className="overlay-text" id="0" ref={imagesec}>
                <h2>Transform Your Data into Insights.</h2>
                <p className="mt-2">
                    Empowering your business with tailored analytics solutions to drive smarter decisions and sustainable success.
                </p>
                <button type="button" className="btn buttoncolor mt-2"
                >Start Your Journey</button>
            </div>

            <div ref={aboutUs} id="1">
                <AboutUs ref={aboutUs} />
            </div>

            <div ref={services} id="2">
                <Service />
            </div>

            <div ref={howWeWork} id="3">
                <HowWeWork onModalClick={showContactModal} />
            </div>

            <div ref={caseStudy} id="4">
                <Casestudies />
            </div>

            <Footer />

            <ContactUsModal showModal={showModal} updateModal={updateModal}/>

        </>
    )
}
export default Tagzero;