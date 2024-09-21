const Cards = ({ image, title, text }) =>{
    return(
        <div className="card border-0 col-12 col-sm-6 col-md-6">
            {image}
            <div className="card-body">
                <small className="about-us-text"><b>{title}</b></small>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}
export default Cards;