import { CDN_IMG_LINK } from '../constants';
import { BiFoodTag } from 'react-icons/bi';

const MenuItems = ({ restaurantMenu }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      {Object.values(restaurantMenu?.menu?.items).map((items) => (
        <div key={items?.id} className="items">
          {items.cloudinaryImageId && (
            <img src={CDN_IMG_LINK + items.cloudinaryImageId} alt="" />
          )}

          <div className="menu-data">
            <span>
              <BiFoodTag className={items?.isVeg ? 'veg' : 'nonveg'} />{' '}
              {items.name}
            </span>
            <span>
              ₹
              {(items?.price
                ? Number(items?.price)
                : Number(items?.defaultPrice)) / 100}
            </span>
            <p>{items?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
