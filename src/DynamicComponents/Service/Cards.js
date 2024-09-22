const Cards = ({ image, title, text }) => {
    return (
        <div className="card rounded-4 border-0 mb-5 mx-5 col-12 col-sm-3 col-md-3">
            <div className="text-center mt-2 ">
                <h4 className="service-card-text">{image}<b className="mx-2"> {title}</b></h4>
            </div>
            <hr className="mx-4"></hr>
            <div className="card-body">
                <ul>
                    {text.map((t) => <li>{t}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Cards;