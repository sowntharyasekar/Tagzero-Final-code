import {WhoWeAre} from "../constants/svglocations";
import {OurValues} from "../constants/svglocations";
import {OurMission} from "../constants/svglocations";
import {WhyChooseUs} from "../constants/svglocations";

export const aboutUsCardsList = [
    {
        image:<WhoWeAre/>,
        title:"Who We Are:",
        text:(<>At <span className="about-us-text">TagZero</span>, we transform data into actionable insights that drive business success. As a leading analytics and consulting firm, we help organizations unlock the power of their data to make smarter decisions and achieve their goal.</>)
    },
    {
        image:<OurValues/>,
        title:"Our Values:",
        text:(<> Integrity, innovation, and excellence define us at <span className="about-us-text">TagZero</span>. We prioritize collaboration and client success, delivering tailored, high-quality solutions. Transparency and a commitment to results guide everything we do.</>)
    },
    {
        image:<OurMission/>,
        title:"Our Mission:",
        text:(<> Our mission is to empower businesses with innovative, data-driven solutions that deliver real results. We are committed to being your trusted partner in navigating the complexities of data and turning challenges into opportunities.</>)
    },
    {
        image:<WhyChooseUs/>,
        title:"Why Choose Us:",
        text:(<><span className="about-us-text">TagZero</span> offers proven expertise, tailored solutions, and end-to-end support to help you achieve your goals. Our client-focused approach ensures we understand your unique needs, delivering impactful results that drive your success.</>)
    }
];
 
