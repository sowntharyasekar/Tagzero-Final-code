
import Cards from "../DynamicComponents/Service/Cards";
import {serviceCardsList} from  "../constants/commonConstatnts";

const Service = () => {
    return (
        <div className="service py-5">
            <div className="text-center">
                <p className="service-title">
                        Core
                        <span className="service-text"> Service</span>
                </p>
                <p>Empowering Your Business with Data-Driven Solutions</p>
            </div>
            <div className="row justify-content-center">
                {serviceCardsList.map((card, index)=>(
                    <Cards image={card.image} title={card.title} text={card.text} />
                ))}
            </div>
        </div>
    )
}
export default Service;