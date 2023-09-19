import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";

const Course = ({ course, handleCart }) => {
  const { img, title, description, price, credit } = course;
  return (
    <div className="w-[312px] p-4 bg-[#FFFFFF] rounded-xl">
      <img className="mb-4" src={img} alt="" />
      <h2 className="mb-3 text-[#1C1B1B] text-lg font-semibold">{title}</h2>
      <p className="mb-4 text-[#1c1b1b99] text-sm leading-6">{description}</p>
      <div className="mb-6 flex justify-between">
        <div className="flex gap-x-3">
          <FiDollarSign className="w-6 h-6" />
          <p className="text-[#1c1b1b99]">Price : {price}</p>
        </div>
        <div className="flex gap-x-3">
          <HiOutlineBookOpen className="w-6 h-6" />
          <p className="text-[#1c1b1b99]">Credit : {credit}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleCart(course)}
        className="bg-[#2F80ED] text-[#FFF] text-lg font-semibold px-[112px] py-[9px] rounded-lg"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default Course;
