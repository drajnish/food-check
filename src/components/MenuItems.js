import { CDN_IMG_LINK } from '../constants';
import { BiFoodTag } from 'react-icons/bi';

const MenuItems = ({ item }) => {
  return (
    <div
      id={item?.id}
      className="flex flex-row-reverse justify-between items-center border-b-2 py-8 first:pt-0 max-w-[70%]"
    >
      <div className="flex flex-col items-center">
        {item.cloudinaryImageId && (
          <div className="w-[118px] h-[120px]">
            <img
              src={CDN_IMG_LINK + item.cloudinaryImageId}
              alt={item.name}
              className="w-full object-cover"
            />
          </div>
        )}
        <button className="px-4 py-2 border text-[#60b246]">ADD +</button>
      </div>

      <div className="text-[#3e4152] text-xl p-1">
        <div className="mb-3">
          <span>
            <BiFoodTag
              className={`${item?.isVeg ? 'fill-[#0f8a65]' : 'fill-[#e43b4f]'}`}
            />{' '}
            <h3>{item.name}</h3>
          </span>
          <span>
            ₹
            {(item?.price ? Number(item?.price) : Number(item?.defaultPrice)) /
              100}
          </span>
        </div>
        <p className="text-sm text-[#282c3f73]">{item?.description}</p>
      </div>
    </div>
  );
};

export default MenuItems;
