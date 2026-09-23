import "../componants/cardcss.css";

const Card3 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg"
          className="card-img-top"
          alt="..."
          height={200}
          width={100}
        />
        <div className="card-body">
          <h5 className="card-title">Sandwich</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};
export default Card3;
