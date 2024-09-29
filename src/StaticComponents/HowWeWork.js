import Cards from "../DynamicComponents/HowWeWork/Cards";
import {howWeWorkList} from "../constants/commonConstatnts";
import { Arrow } from "../constants/svglocations";

const HowWeWork = (props) => {
    return (
        <div className="py-5">
            <div className="text-center">
                <p className="service-title">
                    How<span className="service-text"> We Work</span>
                </p>
            </div>
            <div className="row justify-content-center mt-4 mx-2 mx-lg-5 px-lg-5">
                {
                    howWeWorkList.map((card,index)=>(
                        <Cards image={card.image} title={card.title} text={card.text} col={card.col} />
                    ))
                }
            </div>
            <div className="text-center d-flex justify-content-center mt-3">
                <div className="w-25">
                    <button className="contact-btn w-75 pt-1" type="button" onClick={()=>props.onModalClick(true)}><h5 >Contact US <Arrow className="mb-1" /></h5></button>
                </div>
            </div>
        </div>
    )
} 

export default HowWeWork;