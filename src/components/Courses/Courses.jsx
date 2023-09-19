import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Courses = ({ carts, handleCart, courseTime, remainingTime, price }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:items-start gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course} handleCart={handleCart} />
        ))}
      </div>
      <div>
        <Cart
          carts={carts}
          courseTime={courseTime}
          remainingTime={remainingTime}
          price={price}
        />
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleCart: PropTypes.func.isRequired,
  carts: PropTypes.array.isRequired,
  courseTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Courses;
