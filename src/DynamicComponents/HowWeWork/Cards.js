const Cards = ({ image, title, text, col }) => {
    return (
        <div className={`card rounded-4 border-1 mx-3 my-3 col-12 col-sm-${col} col-md-${col} howweworkcard`}>
            <div className="card-body">
                <h4 className="card-title"><b>{title}</b></h4>
                <p className="card-text">{text}</p>
            </div>
            {image}
        </div>
    );
}

export default Cards;
