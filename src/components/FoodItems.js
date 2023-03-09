import { CDN_IMG_LINK } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const FoodItems = (props) => {
  const { name, price, defaultPrice, quantity, category, cloudinaryImageId } =
    props;
  const dispatch = useDispatch();

  const addFoodItem = (props) => {
    dispatch(addItem(props));
  };

  const removeFoodItem = (props) => {
    dispatch(removeItem(props));
  };

  return (
    <div className="flex justify-between items-center border-b m-5 px-2 pb-8">
      <div className="flex flex-col">
        <span>{name}</span>
        <span className="text-[#7e808c]">{category}</span>
        <span>₹ {(price ? Number(price) : Number(defaultPrice)) / 100}</span>
      </div>
      <div className="w-32">
        <img src={CDN_IMG_LINK + cloudinaryImageId} alt={name} />
        <div className="flex justify-around px-2 py-1 mt-2 border text-[#60b246]">
          <span
            className="inline-block cursor-pointer"
            onClick={() => removeFoodItem(props)}
          >
            -
          </span>
          <span>{quantity}</span>
          <span
            className="inline-block cursor-pointer"
            onClick={() => addFoodItem(props)}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
