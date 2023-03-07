import { CDN_IMG_LINK } from '../constants';

const FoodItems = ({
  name,
  price,
  defaultPrice,
  quantity,
  category,
  cloudinaryImageId,
}) => {
  return (
    <div className="flex justify-between items-center border-b m-5 px-2 pb-8">
      <div className="flex flex-col">
        <span>{name}</span>
        <span className="text-[#7e808c]">{category}</span>
        <span>₹ {(price ? Number(price) : Number(defaultPrice)) / 100}</span>
      </div>
      <div className="w-32">
        <img src={CDN_IMG_LINK + cloudinaryImageId} alt={name} />
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default FoodItems;
