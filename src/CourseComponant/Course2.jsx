import "../componants/cardcss.css";

const Course2 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://miro.medium.com/1*9pVLG4BzEWIcMnfhFp9ULQ.png"
          className="card-img-top"
          alt="..."
          height={100}
          width={50}
        />
        <div className="card-body">
          <h5 className="card-title">Dev-Ops</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            veniam odio, repudiandae quas est consectetur blanditiis rem soluta
            enim eaque laudantium, quibusdam
          </p>
          <a
            href="https://completejavaclasses.com/index.html#"
            className="btn btn-primary"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
};
export default Course2;
