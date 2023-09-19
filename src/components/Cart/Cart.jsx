import PropTypes from "prop-types";
const Cart = ({ carts, courseTime, remainingTime, price }) => {
  return (
    <>
      <div className="w-[312px] p-6 bg-[#FFFFFF] rounded-xl">
        <h2 className="text-[#2F80ED] text-lg font-bold pb-4 border-[#1c1b1b33] border-b">
          Credit Hour Remaining {remainingTime} hr
        </h2>
        <p className="mt-4 mb-5 text-[#1C1B1B] text-xl font-bold">
          Course Name
        </p>
        <div className="pb-6 border-[#1c1b1b33] border-b space-y-2">
          {carts.map((cart, idx) => (
            <p key={cart.id} className="text-[#1c1b1b99]">
              {idx + 1}
              <span> </span>
              {cart.title}
            </p>
          ))}
        </div>
        <p className="py-4 text-[#1c1b1bcc] font-medium border-[#1c1b1b33] border-b">
          Total Credit Hour : {courseTime}
        </p>
        <p className="pt-4 text-[#1c1b1bcc] font-medium">
          Total Price : {price.toFixed(2)} USD
        </p>
      </div>
    </>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
  courseTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Cart;
