import "../componants/cardcss.css";

const Course4 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://miro.medium.com/1*bH7r8B1_4D93Vt37ZZ-tcg@2x.jpeg"
          className="card-img-top"
          alt="..."
          height={100}
          width={50}
        />
        <div className="card-body">
          <h5 className="card-title">AWS services</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, aperiam sequi consequatur, eligendi unde libero odit
            itaque quos earum qui quas molestias modi temporibus dolores.
          </p>
          <a
            href="https://completejavaclasses.com/cloud-computing.php"
            className="btn btn-primary"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
};
export default Course4;
