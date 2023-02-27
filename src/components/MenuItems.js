import { CDN_IMG_LINK } from '../constants';
import { BiFoodTag } from 'react-icons/bi';
import MenuWidgets from './MenuWidgets';

const MenuItems = ({ restaurantMenu }) => {
  console.log(restaurantMenu);
  return (
    <div className="flex justify-between pt-12">
      <MenuWidgets widgets={restaurantMenu?.menu?.widgets} />
      <div className="w-9/12 pl-12">
        {Object.values(restaurantMenu?.menu?.items).map((items) => (
          <div
            key={items?.id}
            id={items?.id}
            className="flex flex-row-reverse justify-between items-center border-b-2 py-8 first:pt-0 max-w-[70%]"
          >
            <div className="flex flex-col items-center">
              {items.cloudinaryImageId && (
                <div className="w-[118px] h-[120px]">
                  <img
                    src={CDN_IMG_LINK + items.cloudinaryImageId}
                    alt={items.name}
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
                    className={`${
                      items?.isVeg ? 'fill-[#0f8a65]' : 'fill-[#e43b4f]'
                    }`}
                  />{' '}
                  <h3>{items.name}</h3>
                </span>
                <span>
                  ₹
                  {(items?.price
                    ? Number(items?.price)
                    : Number(items?.defaultPrice)) / 100}
                </span>
              </div>
              <p className="text-sm text-[#282c3f73]">{items?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
