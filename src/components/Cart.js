import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FoodItems from './FoodItems';
import emptyCart from '../assets/img/emptyCart.png';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="p-5">
      {/* <button className="bg-green-100 p-2 m-5">Clear Cart</button> */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <div className="w-2/5">
            <img src={emptyCart} alt="" />
          </div>
          <div className="text-center">
            <span className="text-[#7e808c]">
              You can go to home page to view more restaurants
            </span>
            <Link to="/">
              <div className="px-1 py-2 m-2 border text-[#60b246]">
                See all Restaurants
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 className="font-bold text-3xl">
            Cart Items - {cartItems.length}
          </h1>

          <div className="flex justify-between">
            <div className="flex flex-col w-full">
              {cartItems.map((item) => (
                <FoodItems key={item.id} {...item} />
              ))}
            </div>
            <div className="w-full">Payment</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
