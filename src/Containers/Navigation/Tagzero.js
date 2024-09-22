import TagzeroNav from "./TagzeroNav";
import { Backgroundimage } from "../../constants/svglocations";
import AboutUs from "../../StaticComponents/AboutUs";
import Service from "../../StaticComponents/Services";
import HowWeWork from "../../StaticComponents/HowWeWork";

const Tagzero=()=>{
    return(
        <>
        {/* // Navbar */}
        <TagzeroNav/>
        {/* // Backgroundimage */}
        
      
            <Backgroundimage className="responsive-image">
               
            </Backgroundimage>
            <div className="overlay-text">
                <h2>Transform Your Data into Insights.</h2>
      <p className="mt-2">
      Empowering your business with tailored analytics solutions to drive smarter decisions and sustainable success.
      </p>
      <button type="button" className="btn buttoncolor mt-2" 
      >Start Your Journey</button>

    </div>

        

        <AboutUs/>
        <Service/>
        <HowWeWork/>
        </>
    )
}
export default Tagzero;