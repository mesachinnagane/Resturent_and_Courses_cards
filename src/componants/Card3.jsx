import "../componants/cardcss.css";

const Card3 = () => {
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
            Fresh and tasty sandwich packed with vegetables and flavorful
            fillings.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
export default Card3;
