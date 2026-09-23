import "../componants/cardcss.css";

const Card1 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://b.zmtcdn.com/data/collections/c2ce56860978c154889c2a604978cf76_1715681196.png?fit=around|562.5:360&crop=562.5:360;*,*"
          className="card-img-top"
          alt="..."
          height={200}
          width={100}
        />
        <div className="card-body">
          <h5 className="card-title">Burger</h5>
          <p className="card-text">
            Juicy burger filled with a crispy patty and fresh vegetables.
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};
export default Card1;
