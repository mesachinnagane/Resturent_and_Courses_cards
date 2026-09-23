import "../componants/cardcss.css";

const Card2 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://diethood.com/wp-content/uploads/2014/06/bbq-chicken-pizza-3.jpg"
          className="card-img-top"
          alt="..."
          height={200}
          width={100}
        />
        <div className="card-body">
          <h5 className="card-title">Pizza</h5>
          <p className="card-text">
            Delicious cheesy pizza topped with fresh ingredients.
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};
export default Card2;
