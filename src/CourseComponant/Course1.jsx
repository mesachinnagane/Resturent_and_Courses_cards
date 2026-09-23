import "../componants/cardcss.css";

const Course1 = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlR7j6UqsDuaUsmUCib8QI1opSL76g-HgXotYJg9trSA&s=10"
          className="card-img-top"
          alt="..."
          height={100}
          width={50}
        />
        <div className="card-body">
          <h5 className="card-title">Java Full-Stack</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            cum eaque sunt porro voluptatibus molestiae iste doloribus.
            Consequuntur nostrum qui natus corporis, laboriosam quam voluptates!
          </p>
          <a
            href="https://completejavaclasses.com/java-j2ee.php"
            className="btn btn-primary"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
};
export default Course1;
