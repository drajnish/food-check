import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import { CDN_IMG_LINK } from '../constants';

import { BiFoodTag } from 'react-icons/bi';

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    menuapi();
  }, []);

  async function menuapi() {
    const resData = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=23.239045&lng=77.435578&menuId=${resId}`
    );
    const json = await resData.json();
    setRestaurantMenu(json.data);
  }

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-menu">
        <div className="menu-header">
          <img src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId} alt="" />
          <div className="rest-info">
            <h2>{restaurantMenu?.name}</h2>
            <p>{restaurantMenu?.cuisines.join(', ')}</p>
            <div className="rest-rating">
              <span>⭐ {restaurantMenu?.avgRating}</span>
              <span>{restaurantMenu?.costForTwoMsg}</span>
            </div>
            <span>
              {restaurantMenu?.area}
              {', '} {restaurantMenu?.locality}
              {', '}
              {restaurantMenu?.city}
            </span>
          </div>
        </div>

        <div className="menu">
          <h2>Menu</h2>
          {Object.values(restaurantMenu?.menu?.items).map((items) => (
            // console.log(items?.category)
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
      </div>
    </>
  );
};

export default RestaurantMenu;
