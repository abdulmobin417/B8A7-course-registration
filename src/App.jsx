import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [carts, setCarts] = useState([]);
  const [courseTime, setCourseTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);
  const [price, setPrice] = useState(0);
  const handleCart = (course) => {
    let obj = carts.find((cart) => cart.id === course.id);
    if (!obj) {
      if (course.credit <= remainingTime) {
        const newCart = [...carts, course];
        setCarts(newCart);
        setCourseTime(courseTime + course.credit);
        setRemainingTime(remainingTime - course.credit);
        setPrice(price + course.price);
      } else {
        toast.warn("Credit can't be more than 20hr", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.info("Already added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="container mx-auto pb-[80px] course-body">
      <h1 className="text-[#1C1B1B] text-center text-3xl font-bold pt-12 mb-8">
        Course Registration
      </h1>
      <Courses
        carts={carts}
        handleCart={handleCart}
        courseTime={courseTime}
        remainingTime={remainingTime}
        price={price}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
