import "../componants/cardcss.css";

const Card4 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://pinchofyum.com/tachyon/Chicken-Caesar-Smash-Tacos.jpg?resize=840%2C1200"
          className="card-img-top"
          alt="..."
          height={200}
          width={100}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
export default Card4;
