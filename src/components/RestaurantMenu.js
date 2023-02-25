import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_IMG_LINK } from '../constants';
import { BsStar } from 'react-icons/bs';

const MenuItems = lazy(() => import('./MenuItems'));

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex bg-[#171a29] p-12 text-white">
        <img
          src={CDN_IMG_LINK + restaurantMenu?.cloudinaryImageId}
          alt={restaurantMenu?.name}
          className="h-40 mr-16"
        />
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
      <Suspense fallback="<Shimmer />">
        <MenuItems restaurantMenu={restaurantMenu} />
      </Suspense>
    </>
  );
};

export default RestaurantMenu;
