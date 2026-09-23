import "../componants/cardcss.css";

const Course3 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJGxj9zYKjCnwLCzvh27wXnDYj4PnVDyUuSdQ34gofNIkZ6CJfEy8_2gP&s=10"
          className="card-img-top"
          alt="..."
          height={100}
          width={50}
        />
        <div className="card-body">
          <h5 className="card-title">Python</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magni quo itaque! Quaerat, numquam deserunt nisi repellat doloremque
            ipsum optio eaque consequatur
          </p>
          <a
            href="https://completejavaclasses.com/python.php"
            className="btn btn-primary"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
};
export default Course3;
