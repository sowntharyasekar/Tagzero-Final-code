import {Logo} from "../../constants/svglocations"
const TagzeroNav =()=>{
    return(
<nav class="navbar bg-dark navbar-expand-lg">
  <div class="container-fluid d-flex justify-content-around ">
    
    <a class="navbar-brand" href="#"><Logo></Logo></a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    
      <div class="navbar-nav">
        <a class="nav-link active text-bg-dark navfont" aria-current="page" href="#">About Us</a>
        <a class="nav-link text-bg-dark navfont" href="#">Services</a>
        <a class="nav-link text-bg-dark navfont" href="#">Case Study</a>
      </div>
    <button type="button" class="btn btn-success">Contact Us</button>

  </div>
</nav>



    )
}
export default TagzeroNav;