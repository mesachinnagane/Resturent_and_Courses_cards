import Card1 from "./componants/Card1";
import Card2 from "./componants/Card2";
import Card3 from "./componants/Card3";
import Card4 from "./componants/Card4";
import "./App.css";
import Course1 from "./CourseComponant/Course1";
import Course2 from "./CourseComponant/Course2";
import Course3 from "./CourseComponant/Course3";
import Course4 from "./CourseComponant/Course4";
const App = () => {
  return (
    <>
      <h1>Restorent Menue</h1>
      <br></br>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>

      <h1>Courses</h1>
      <br></br>
      <div className="cards">
        <Course1 />
        <Course2 />
        <Course3 />
        <Course4 />
      </div>
    </>
  );
};

export default App;
