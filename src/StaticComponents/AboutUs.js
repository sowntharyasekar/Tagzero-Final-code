import '../assets/css/style.css';
import Cards from "../DynamicComponents/AboutUs/Cards";
import {aboutUsCardsList} from "../constants/commonConstatnts";

const AboutUs = () => {
    return (
        <div className="row justify-content-around my-5 mx-4">
        <div className="col-12 col-md-5 text-center">
            <span className="title-tag pt-5">
                Introducing<span className="about-us-text"> TagZero</span>
            </span>
        </div>
        <div className="col-12 col-md-7">
            <div className="row">
                {aboutUsCardsList.map((card, index) => (
                    <Cards image={card.image} title={card.title} text={card.text} />
                ))}
            </div>
        </div>
    </div>    
    )
}

export default AboutUs;