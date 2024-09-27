import {Logo,Instagram,TwitterX,LinkedIn} from "../constants/svglocations"

const Footer=()=>{
    return(
        <div className="mt-6 d-flex flex-column align-items-center" style={{}}>
          
                <div className="horizontal-line"></div>
                <div className="row mt-4" style={{
                    width:"80%"
                }}>
<div className="col-md-2 col-sm-3 col-6">
                <Logo className="img-fluid"></Logo>
                <p className="footertext mt-2">technologies private limited</p>
                </div>
                <div className="col-md-3 col-sm-3 col-6">
                <Instagram></Instagram><LinkedIn></LinkedIn><TwitterX></TwitterX>
                <p className="footertext2 mt-2">Subscribe for the latest updates</p>
                </div>
                <div className="col-md-6 d-flex justify-content-end col-sm-3 col-6">
               <div className="flex-column">
                <p className="quicklink">Quick links</p>
                <p className="quicklinktext mt-1">About us</p>
                <p className="quicklinktext mt-1">Services</p>
                <p className="quicklinktext mt-1">Case Study</p>
                </div>
                </div>
               
                
                </div>
                <div className="horizontal-line"></div>
                <p className="my-5 copyrights">© 2024 <span className="copyrightssub">TagZero. All Rights Reserved.</span> </p>

        </div>
    )
}
export default Footer;