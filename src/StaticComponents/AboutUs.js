import '../assets/css/style.css';
import Cards from "../DynamicComponents/AboutUs/Cards";
import {aboutUsCardsList} from "../constants/commonConstatnts";

const AboutUs = () => {
    return (
        <div className="row justify-content-around my-5 mx-4">
        <div className="col-12 col-md-4">
            <p className="title-tag">
                Introducing
                <span className="about-us-text">TagZero</span>
            </p>
        </div>
        <div className="col-12 col-md-8">
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