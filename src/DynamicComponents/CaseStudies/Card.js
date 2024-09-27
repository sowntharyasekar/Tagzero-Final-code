const Cards = ({ image, title, text}) => {
  return (
    <div class="card col-12 col-sm-3 col-md-3 ">
        {image}
        <hr className="mx-4"></hr>
      <div class="card-body">
        <h5 class="card-title" style={{
          textTransform:"uppercase"
        }}>{title}</h5>
       
       <ol class="list-group list-group-flush mb-4">
                    {text.map((i) => <li class="d-flex">
    <div class="me-auto">
      <div class="fw-bold listtext">{i.title}:{" "}
     <span className="fw-normal listtext">{i.text}</span>
     </div>
    </div>
  </li>)}
                </ol>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        <a href="#" class="card-link text-dark">Read More{"->"}</a>
      </div>
    </div>
  );
};
export default Cards;
